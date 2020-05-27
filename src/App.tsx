import React  from 'react';
import styled from 'styled-components';
import keyConfiguration from "../config/pubnub-keys.json";
import { Provider } from "react-redux";
import { appTheme } from "./Theme";
import { createAppStore } from "./store";
import PubNub from 'pubnub';
import { ThemeProvider } from "styled-components";
import {ChatDemo} from './components/ChatDemo';

import { PubNubProvider, usePubNub } from 'pubnub-react';
import Pubnub from 'pubnub';

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

  const store = createAppStore({
    pubnub: {
      api: new PubNub({
        publishKey: 'demo',
        subscribeKey: 'demo',
      })
    }
  });

 const pubnub = usePubNub();

const App = () => {

  //return (<div>Test</div>);
  return (

    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <PubNubProvider client={pubnub}>
          <ChatDemo client={pubnub} store={store} skin="pubnub-live-chat"></ChatDemo>
          {/* <Normalize />
          <GlobalStyles />
          <ApplicationRouter /> */}
        </PubNubProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App ;

