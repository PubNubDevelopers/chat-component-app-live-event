import React, { useContext } from 'react';
import { Wrapper } from "./style";
import {ChatDemo} from './components/ChatDemo/ChatDemo';
import { Login } from "./components/Login/Login";
import { useAppState,AppStateProvider } from "./AppStateContext"


interface ApplicationRouterInitProps {

 }

export const ApplicationRouter = (props: ApplicationRouterInitProps) => {
  
  //This loggedIn variable is used to show the login screen first if the user is not logged in.
  const {state} = useAppState();
  //view will contain the login screen or chat depending if the user is logged in or not:
  const view = state.simulateLogin  ? <ChatDemo /> : <Login  />;
 

  return (
    <Wrapper>
      <AppStateProvider>
      {view}
      </AppStateProvider>
    </Wrapper>
  );
};
