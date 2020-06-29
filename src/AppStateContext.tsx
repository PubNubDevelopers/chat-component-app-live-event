import React, { useCallback, createContext, useReducer, useContext,useState,useEffect } from "react"
import { generateUUID } from 'pubnub';
const PubNub = require('pubnub');
import Pubnub, { SubscribeParameters } from "pubnub";

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

  interface Message {
    id: string,
    content: string,
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
  }
  
  interface MessageList {
    id: string,
    listname: string,
    messages: Event[],
  }

export interface AppState {
  simulateLogin: true,
  users: UserList, //For login simulation only since Users list is usually not stored here
  events: EventList, //For event pickup simulation only since Users list is usually not stored here
  messages: MessageList, //Where the current Messages to be displayed are stored.
  pubnub: Pubnub, //Our link to PubNub
  defaultchannel: SubscribeParameters //The default channel associated to the demo, should be associated with an Event.
}

type Action =
  | {
      type: "ADD_USER_LIST"
      payload: string
    }
  | {
      type: "ADD_EVENT_LIST"
      payload: { listname: string, listId: string, events:[] }
    }
  | {
      type: "ADD_EVENT"
      payload: {  id: string, eventname: string, eventchannel: SubscribeParameters}
    }  
  | {
      type: "ADD_MESSAGE_LIST"
      payload: { listname: string, listId: string, events:[] }
    }
  | {
    type: "ADD_MESSAGE"
    payload: { listId: string, 
      messagecontent: string 
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
    }
  }
  | {
      type: "SEND_MESSAGE"
      payload: { 
        //listId: string, 
        messagecontent: string 
        //internalKey: string,
        //key: string,
        senderId: string,
        message: string,
        UserAvatar: string,
        timetoken: null,
        senderName: string,
        dateFormat: string,
        //reactions: null,
        //addMessageReaction: null,
        //addActions: null
      }
    }



interface AppStateContextProps {
  state: AppState
}

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {

    case "ADD_MESSAGE": {
      return {
        ...state,
        messages : [...state.messages,{ 
          // id: "1", 
          ...action.payload, 
          messages: [] 
        }
        ]
      }
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
      state.pubnub.publish({
        channel: 'liveeventdemo',
        message: `{
          "internalKey": "86e41229-37a3-44ac-9979-fe91d49f59be",
          "key": "fd856b37-daba-4fef-aaf9-238be310df4a",
          "senderId": "bc296603-b349-43de-8574-0a3a9392e30a",
          "message": "${action.payload}",
          "UserAvatar": "https://robohash.org/ipsaquodeserunt.jpg?size=50x50&set=set1",
          "timetoken": "1592439990",
          "senderName": "noswick1",
          "dateFormat": null,
          "reactions": null,
          "addMessageReaction": null,
          "addActions": null
      }`,
      });
      
      return {...state}
    }

    case "ADD_EVENT": {
      state.events.events.push({
        id: generateUUID.toString(),
        eventname: action.payload.eventname,
        eventchannel: action.payload.eventchannel
      });

      return {...state}
    }
   
    default: {
      return state
    }


  }
}


const appData: AppState = {
    simulateLogin: true,
    users: [],
    messages: [],
    events: [],
    pubnub: new PubNub({
        publishKey: "pub-c-9d0ab7cd-fac4-46d4-82b0-c45e46dd4793",
        subscribeKey: "sub-c-419013b0-9953-11ea-9123-e6a08f73ae22",
        uuid: generateUUID.toString()
      }),
    defaultchannel:    {
          channels: ['liveeventdemo'],
    withPresence: true
    
    } 

}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData)


  useEffect(() => {


    try{
        state.pubnub.addListener({
        message: (messageEvent) => {
          console.log(`RECEIVING MESSAGE ${messageEvent.message}`);
          dispatch({
            type: "ADD_MESSAGE",
            payload: messageEvent.message 
          });
        },
      });
      state.pubnub.subscribe(state.defaultchannel);
      state.pubnub.publish({
        channel: 'liveeventdemo',
        message: '{"status":"test after subscribe"}',
      });

    } catch (e) {
      console.log(`Subscribe error ${e.message}`);
    }

}, [state.pubnub]); 

    const sendMessage = useCallback(
    async message => {
      await state.pubnub.publish({
        channel: 'liveeventdemo',
        message,
      });

    },
    [
      //pubnub, 
      //setInput
    ]
  );

   useEffect(() => console.log(state.pubnub), [state.pubnub]);

  return (
    <AppStateContext.Provider value={{state:appData}}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
