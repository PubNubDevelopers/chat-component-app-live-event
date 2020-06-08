import React from "react";
import { Wrapper } from "./style";
import { isUserLoggedIn } from "./features/authentication/authenticationModel";
import { useSelector } from "react-redux";
import keyConfiguration from "./config/pubnub-keys.json";
import isPubNubConfigured from "./foundations/utilities/isPubNubConfigured";
import { ErrorBanner } from "./styles/ErrorBanner.style";
import {ChatDemo} from './components/ChatDemo/ChatDemo';
import { Login } from "./components/Login/Login";

 
const ErrorBannerComponent = (
  <ErrorBanner>
    <div>
      Please run <pre>npm setup</pre>
    </div>
  </ErrorBanner>
);

interface ApplicationRouterInitProps {
  simulate: true,

 }

export const ApplicationRouter = (props: ApplicationRouterInitProps) => {
  const loggedIn = useSelector(isUserLoggedIn);
  var directToEvent = (loggedIn || props.simulate) ;
  const view = directToEvent  ? <ChatDemo skin="" store="" client=""/> : <Login simulate={props.simulate} />;
  return (
    <Wrapper>
      {!isPubNubConfigured(keyConfiguration) && ErrorBannerComponent}
      {view}
    </Wrapper>
  );
};
