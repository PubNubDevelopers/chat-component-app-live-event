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

export const ApplicationRouter = () => {
  const loggedIn = useSelector(isUserLoggedIn);
  const view = loggedIn ? <ChatDemo skin="" store="" client=""/> : <Login />;
  return (
    <Wrapper>
      {!isPubNubConfigured(keyConfiguration) && ErrorBannerComponent}
      {view}
    </Wrapper>
  );
};
