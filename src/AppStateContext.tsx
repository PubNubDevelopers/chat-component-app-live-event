import PubNub, { generateUUID, SubscribeParameters } from "pubnub";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import keyConfiguration from "./config/pubnub-keys.json";


//These are shared UUIDs that we can use when needed for messages, users and  internally.
const UUIDstamped001 = generateUUID();


//This is the configuration for our PubNub connection.
//We merge the keys from KeyConfiguration with basic configuration options for PubNub
const pubnubConfig = Object.assign(
  {},
  {
      restore: true,       // Ensure that subscriptions will be retained if the network connection is lost
      uuid: UUIDstamped001, // Our connection unique identifier, very important to avoid being charged for the same user in MAU mode.
      ssl: true, //Encrypted end to end from  browser to PubNub network.
      presenceTimeout: 130, // 
      logVerbosity: false, //Show more in the browser console when enabled.
      heartbeatInterval: 0 //
  },
  keyConfiguration //Our keys extracted from the config directory in  the  pubnub-keys.json file
);

interface Event {
  id: string,
  eventname: string,
  eventchannel: SubscribeParameters
}
//This is where you define the Live Event Properties.
export const appData: AppState = {
  alert: "green",
  simulateLogin: true,
  presence: false,
  eventName: "PubNub Live Event", //Event name as displayed by components.
  maxMessagesInList: 200, //Max number of messages displayed at most in the message list. the more messages the more memory will be consumed by the browser.
  eventId: "PNEVT001", //Event ID as displayed by components.
  messageListFilter: `language_tone != 'offensive'`, //See README before changing this value.
  //messageListFilter: `language_tone != 'offensive'`,
  eventHostAvatar: "https://robohash.org/ipsaquodeserunt.jpg?size=50x50&set=set1", //The URL for the host avatar graphic file
  ownerAvatar: "https://robohash.org/ipsaquodeserunt.jpg?size=50x50&set=set1", //The URL for the host avatar graphic file
  eventAvatar: "/images/companyLogo@3x.png",
  channel:"liveeventdemo.row1",
  messageBuffer: "", //Future use.
  //users: [] ,temnte //Future use.
  messages: [], //Array of UserMessages, intitalized to empty, Where live event messages are streamed into.
  events: [], //Future use
  pubnubConf: pubnubConfig,  //This is our configuration for the Live Event Channel used for exchanging messages among event participants.  
  defaultchannel: {
    channels: ['liveeventdemo.row1'], //Only one channel, split in different rows if required and load in props, can be set by load balancer.
    withPresence: true, //Presence can be set to false here.
  },
  pubnub: new PubNub({
    publishKey: pubnubConfig.publishKey,
    subscribeKey: pubnubConfig.subscribeKey,
    restore: true,
    ssl: true,
    autoNetworkDetection: true
  }),
  message: "",

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
  key: string;
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

//This is the default settings for your Live Event Chat App.
//Change these settings to your liking.
export interface AppState {
  alert: string,
  simulateLogin: boolean,
  eventName: string,
  eventId: string,
  maxMessagesInList: number,
  messageListFilter: string,
  messageBuffer?: string;
  message: string;
  ownerAvatar: string,
  eventHostAvatar: string,
  eventAvatar: string,
  channel: string,
  presence: boolean,
  //users: UserList, //For login simulation only since Users list is usually not stored here
  events?: Event[], //For event pickup simulation only since Users list is usually not stored here
  messages: UserMessage[], //Where the  Messages from all participants to the event are stored.
  pubnub: PubNub,
  pubnubConf: typeof pubnubConfig, //Our link to PubNub
  defaultchannel: SubscribeParameters //The default channel associated to the demo, should be associated with an Event.
}

export type Action =
  | {
    type: "ADD_ALERT",
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
    payload: UserMessage
  }
  | {
    type: "ADD_HISTORY",
    payload: UserMessage
  }
  | {
    type: "SEND_MESSAGE",
    payload: {
      messageContent: string
    }
  | {
      type: "ADD_ALERT",
      payload: string
    }
  }



interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

//This is where the interaction with the back end operates.
//The functions below are accessible through passing parameters to a dispatch function always accessible in our components. 
export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {

    case "ADD_ALERT": {

      const merged: AppState = {
        ...state,
        alert: "sent"
      };
      return merged;

    }
    case "ADD_MESSAGE": {
      //If the messagelist is over our cap we discard the oldest message in the list.
      if (state.messages.length > state.maxMessagesInList ){
        state.messages.shift();
      }

      const merged: AppState = {
        ...state,
        messages: [
          ...state.messages as Array<UserMessage>,
          {
            ...action.payload as UserMessage
          }
        ]
      };

      return merged;

    }
    //ADD_MESSAGE adds an incoming message to our internal MessageList buffer.
    case "ADD_HISTORY": {
      //If the messagelist is over our cap we discard the oldest message in the list.
      if (state.messages.length > state.maxMessagesInList) {
        state.messages.shift();
      }

      const merged: AppState = {
        ...state,
        messages: [
          ...state.messages as Array<UserMessage>,
          {
            ...action.payload as UserMessage
          }
        ]
      };

      return merged;

    }
    case "SEND_MESSAGE": {

      const msgId: string = generateUUID();
      state.pubnub.publish({
        channel: state.channel,
        sendByPost: true,
        message: {
          "internalKey": msgId,
          "key": msgId,
          "senderId": "bc296603-b349-43de-8574-0a3a9392e30a",
          "message": action.payload.messageContent,
          "UserAvatar": "https://robohash.org/ipsaquodeserunt.jpg?size=50x50&set=set1",
          "timetoken": "1592439990",
          "senderName": "Mr. Robot",
          "dateFormat": null,
          "reactions": null,
          "addMessageReaction": null,
          "addActions": null
      },
      });
      state.alert = "Message sent...";
      return { ...state }
    }

    case "ADD_EVENT": {

      return { ...state }
    }

    default: {
      return state
    }


  }
}



export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {

  const [state, dispatch] = useReducer(appStateReducer, appData)
  useEffect(() => {
    try {
 
      //This where PubNub receives messages subscribed by the channel.
      state.pubnub.addListener({
        message: (messageEvent) => {
          //console.log(`RECEIVING MESSAGE ${messageEvent.message.key}`);
          dispatch({
            type: "ADD_MESSAGE",
            payload: messageEvent.message
          });
        },

      });


      //Lets' subscribe on the default channel.
      state.pubnub.subscribe(
        {
          channels: [state.channel], //Only one channel, split in different rows if required and load in props, can be set by load balancer.
          withPresence: state.presence,

        }
      );


      //In case our App MessageListFilter propery we filter.
      if (state.messageListFilter.length > 0) {
        console.log(`Filtering  message: ${state.messageListFilter}`);
        state.pubnub.setFilterExpression(state.messageListFilter);
      }

    } catch (e) {
      console.log(`Subscribe error ${e.message}`);
    }

  }, [appData]);


  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
