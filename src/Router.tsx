import React, { useContext } from 'react';
import { Wrapper } from "./style";
import {ChatDemo} from './components/ChatDemo/ChatDemo';
import { Login } from "./components/Login/Login";
import { AppStateProvider } from "./AppStateContext"


interface ApplicationRouterInitProps {}

export const ApplicationRouter = (props: ApplicationRouterInitProps) => {
  return (
    <Wrapper>
      <AppStateProvider>
      {true  ? <ChatDemo /> : <Login  />}
      </AppStateProvider>
    </Wrapper>
  );
};
