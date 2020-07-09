import React, { useCallback, createContext, useReducer, useContext, useState, useEffect } from "react"
import { generateUUID } from 'pubnub';
import PubNub, { SubscribeParameters } from "pubnub";
import keyConfiguration from "../config/pubnub-keys.json";
import { debug } from "console";


const pubnubConfig = Object.assign(
  {},
  {
    // Ensure that subscriptions will be retained if the network connection is lost
    restore: true,
        heartbeatInterval: 0
  },
  keyConfiguration
);



interface Event {
  id: string,
  eventname: string,
  eventchannel: SubscribeParameters
}

interface EventList {
  id: string,
  listname: string,
  events: Event[],
}
interface User {
  id: string,
  username: string,
}

interface UserList {
  id: string,
  listname: string,
  users: User[],
}
export interface Message {
  internalKey: string ;

}

export class UserMessage implements Message {
  id: string;
  internalKey: string;
  key?: string;
  senderId: string;
  message: string;
  UserAvatar?: string;
  timetoken?: null;
  senderName: string;
  dateFormat?: string;
  reactions?: null;
  addMessageReaction?: null;
  addActions?: null;
  

  constructor(payload: string) {
    const tmpKey = generateUUID();
    this.internalKey = tmpKey;
    debugger;
    console.log(payload);
    var data = JSON.parse(payload);
    if (!data.key ) {
      throw new Error('Invalid message payload received: ' + payload);
    }
    this.id=data.id;
    this.message = data.message;
    this.key= data.key;
    this.UserAvatar= data.UserAvatar;
    this.timetoken= data.timetoken;
    this.senderId= data.senderId;
    this.senderName= data.senderName;
    this.dateFormat= data.dateFormat;
    this.reactions= data.reactions;
    this.addMessageReaction= data.addMessageReaction;
    this.addActions= data.addActions;
  }
}
// interface Message {
//   id: string,
//   content: string,
//   internalKey: string,
//   key: string,
//   senderId: string,
//   message: string,
//   UserAvatar: string,
//   timetoken: null,
//   senderName: string,
//   dateFormat: string,
//   reactions: null,
//   addMessageReaction: null,
//   addActions: null
// }


export interface AppState {
  simulateLogin: true,
  pubnubConf: typeof pubnubConfig,
  eventName: string,
  eventId: string,
  ownerAvatar: string,
  users: UserList, //For login simulation only since Users list is usually not stored here
  events: EventList, //For event pickup simulation only since Users list is usually not stored here
  messages: UserMessage[], //Where the current Messages to be displayed are stored.
  pubnub: PubNub, //Our link to PubNub
  defaultchannel: SubscribeParameters //The default channel associated to the demo, should be associated with an Event.
}

type Action =
  | {
    type: "ADD_USER_LIST",
    payload: string
  }
  | {
    type: "ADD_EVENT_LIST",
    payload: { listname: string, listId: string, events: [] }
  }
  | {
    type: "ADD_EVENT",
    payload: { id: string, eventname: string, eventchannel: SubscribeParameters }
  }
  | {
    type: "ADD_MESSAGE_LIST",
    payload: { listname: string, listId: string, events: [] }
  }
  | {
    type: "ADD_MESSAGE",
    payload: string
    // payload: {
    //   listId: string,
    //   messageContent: string
    //   internalKey: string,
    //   key: string,
    //   senderId: string,
    //   message: string,
    //   UserAvatar: string,
    //   timetoken: null,
    //   senderName: string,
    //   dateFormat: string,
    //   reactions: null,
    //   addMessageReaction: null,
    //   addActions: null
    // }
  }
  | {
    type: "SEND_MESSAGE",
    payload: {
      messageContent: string
    }
  }



interface AppStateContextProps {
  state: AppState,
  
}

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {

    case "ADD_MESSAGE": {
      const debugMerged: AppState = {
        ...state,
        messages: [...state.messages as List<UserMessage> , {
          ...action.payload
        }
        ]
      };

      return debugMerged;


      /*
            internalKey: string,
            key: string,
            senderId: string,
            message: string,
            UserAvatar: string,
            timetoken: null,
            senderName: string,
            dateFormat: string,
            reactions: null,
            addMessageReaction: null,
            addActions: null
    */
    }
    case "SEND_MESSAGE": {

      const msgId: string = generateUUID();
      state.pubnub.publish({
        //channel: state.defaultchannel.channels[0],
        channel: 'liveeventdemo',
        message: {
          "internalKey": msgId,
          "key": msgId,
          "senderId": "bc296603-b349-43de-8574-0a3a9392e30a",
          "message": action.payload,
          "UserAvatar": "https://robohash.org/ipsaquodeserunt.jpg?size=50x50&set=set1",
          "timetoken": "1592439990",
          "senderName": "Mr. Robot",
          "dateFormat": null,
          "reactions": null,
          "addMessageReaction": null,
          "addActions": null
      },
      });

      return { ...state }
    }

    case "ADD_EVENT": {
      state.events.events.push({
        id: generateUUID(),
        eventname: action.payload.eventname,
        eventchannel: action.payload.eventchannel
      });

      return { ...state }
    }

    default: {
      return state
    }


  }
}

const UUIDstamped001 = generateUUID();
const UUIDstamped002 = generateUUID();
const UUIDstamped003 = generateUUID();
const UUIDstamped004 = generateUUID();



export const appData: AppState = {
  simulateLogin: true,
  eventName: "PubNub Live Event",
  eventId: "PNEVT001",
  eventHostAvatar: "",
  messageBuffer: "",
  users: [] ,
  messages: [],
  events: [],
 
  pubnubConf: pubnubConfig,
  defaultchannel: {
    channels: ['liveeventdemo'],
    withPresence: true
  },
  pubnub: new PubNub({
    publishKey: pubnubConfig.publishKey,
    subscribeKey: pubnubConfig.subscribeKey,
    uuid: UUIDstamped001
  }),

}
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  
  const [state, dispatch] = useReducer(appStateReducer, appData)
  useEffect(() => {
    try {
      console.log(`Subscribing to channel: ${state.defaultchannel.channels[0] ? state.defaultchannel.channels[0] : 'liveeventdemo'}`);
      state.pubnub.addListener({
        message: (messageEvent) => {
          console.log(`RECEIVING MESSAGE ${messageEvent.message.key}`);
          dispatch({
            type: "ADD_MESSAGE",
            payload: messageEvent.message
          });
        },
      });
      state.pubnub.subscribe(state.defaultchannel);
      // const tmpUUID = generateUUID();
      // state.pubnub.publish({
      //   channel: state.defaultchannel.channels[0],
      //   message: { "internalKey": tmpUUID, 
      //   "key": tmpUUID, 
      //   "senderId": tmpUUID, 
      //   "message": "Profit-focused disintermediate budgetary management", 
      //   "UserAvatar": "https://robohash.org/ipsaquodeserunt.jpg?size=50x50&set=set1", 
      //   "timetoken": "1592439990", 
      //   "senderName": "noswick1", 
      //   "dateFormat": null, 
      //   "reactions": null, 
      //   "addMessageReaction": null, 
      //   "addActions": null },
      // });

    } catch (e) {
      console.log(`Subscribe error ${e.message}`);
    }

  }, []);


  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
