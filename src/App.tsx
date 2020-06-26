
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import keyConfiguration from "../config/pubnub-keys.json";
import { createAppStore } from "./store";
import { Provider } from "react-redux";
import { appTheme } from "./Theme";
import PubNub from 'pubnub';
import { ApplicationRouter } from "./Router";
import { ThemeProvider } from "styled-components";
import { PubNubProvider,PubNubConsumer, usePubNub } from 'pubnub-react';
import {LiveEventContext} from "./liveevents-context";
import { useAppState } from "./AppStateContext"

import './App.css';


const pubnubConfig = Object.assign(
  {},
  {
    // Ensure that subscriptions will be retained if the network connection is lost
    restore: true,
        heartbeatInterval: 0
  },
  keyConfiguration
);

const pubnub = new PubNub({
  publishKey: "pub-c-9d0ab7cd-fac4-46d4-82b0-c45e46dd4793",
  subscribeKey: "sub-c-419013b0-9953-11ea-9123-e6a08f73ae22",
  uuid:"023402340SDFSFS23BBF"
});

const store = createAppStore({
    pubnub: {
      api: pubnub
    }
  });

  const eventState = {
    eventID: "0001",
    loading: false,
    error: null,
    participantsCount: 0,
    hostName: 'Your name',
    pubnubconfig: pubnubConfig,
    pubnubclient: pubnub,
    pubnubstore: store,
    simulate: true,
    events: []


  } 
const App = () => {
  const {state, dispatch} = useAppState()
   return (

     <ThemeProvider theme={appTheme}>
       <Provider store={store}>
        <PubNubProvider client={pubnub}>

        <ApplicationRouter/>

  {/* <Normalize />
   <GlobalStyles />

          */}
   </PubNubProvider>
       </Provider>
     </ThemeProvider>
   );
};



export default App ;

