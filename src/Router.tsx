import React, { useContext } from 'react';
import { Wrapper } from "./style";
import { isUserLoggedIn } from "./features/authentication/authenticationModel";
import { useSelector } from "react-redux";
import keyConfiguration from "./config/pubnub-keys.json";
import isPubNubConfigured from "./foundations/utilities/isPubNubConfigured";
import { ErrorBanner } from "./styles/ErrorBanner.style";
import {ChatDemo} from './components/ChatDemo/ChatDemo';
import { Login } from "./components/Login/Login";
//import Pubnub from "pubnub";

import { LiveEventContext } from './liveevents-context';
import {LiveEventContextProvider} from './components/LiveEventContextProvider/LiveEventContextProvider'
import { useAppState } from "./AppStateContext"

const ErrorBannerComponent = (
  <ErrorBanner>
    <div>
      Please run <pre>yarn install</pre>
    </div>
  </ErrorBanner>
);

interface ApplicationRouterInitProps {

 }

export const ApplicationRouter = (props: ApplicationRouterInitProps) => {
  
  //This loggedIn variable is used to show the login screen first if the user is not logged in.
  const {state, dispatch} = useAppState()

  const loggedIn = useSelector(isUserLoggedIn);
  const liveEventContext = useContext(LiveEventContext);


  //view will contain the login screen or chat depending if the user is logged in or not:
  const view = liveEventContext.simulateLogin  ? <ChatDemo /> : <Login  />;
 
  
  // We return the view, as defined above, inside the Wrapper element
  // defined in ./syle
  return (
    <Wrapper>
      {/* If PubNub is not configured properly we show the error banner. */}
      {!isPubNubConfigured(keyConfiguration) && ErrorBannerComponent}
      
      {/* ... otherwise we show our view containing the login screen or the ChatDemo */}
  
      {view}


          
      
    </Wrapper>
  );
};
