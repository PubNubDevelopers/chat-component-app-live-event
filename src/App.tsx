
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

const App = () => {

   return (

     <ThemeProvider theme={appTheme}>
       <Provider store={store}>
        <PubNubProvider client={pubnub}>
        <ApplicationRouter simulate={true} client={pubnub}/>
  {/* <Normalize />
   <GlobalStyles />

          */}
   </PubNubProvider>
       </Provider>
     </ThemeProvider>
   );
};



export default App ;

