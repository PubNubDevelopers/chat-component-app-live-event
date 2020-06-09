import React from "react";
import { Wrapper } from "./style";
import { isUserLoggedIn } from "./features/authentication/authenticationModel";
import { useSelector } from "react-redux";
import keyConfiguration from "./config/pubnub-keys.json";
import isPubNubConfigured from "./foundations/utilities/isPubNubConfigured";
import { ErrorBanner } from "./styles/ErrorBanner.style";
import {ChatDemo} from './components/ChatDemo/ChatDemo';
import { Login } from "./components/Login/Login";
import Pubnub from "pubnub";

 
const ErrorBannerComponent = (
  <ErrorBanner>
    <div>
      Please run <pre>npm setup</pre>
    </div>
  </ErrorBanner>
);

interface ApplicationRouterInitProps {
  simulate: boolean,
  client: Pubnub,
  store: any
 }

export const ApplicationRouter = (props: ApplicationRouterInitProps) => {
  
  //This loggedIn variable is used to show the login screen first if the user is not logged in.

  const loggedIn = useSelector(isUserLoggedIn);

  //var directToEvent = (loggedIn || props.simulate) ;
  //Comment previous line and uncomment the following line
  //to go directly to LiveEvent without going through Login screen.
  const directToEvent = true;
  
  //view will contain the login screen or chat depending if the user is logged in or not:
  const view = directToEvent  ? <ChatDemo skin="" store={props.store} client={props.client}/> : <Login simulate={props.simulate} />;
  
  
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
