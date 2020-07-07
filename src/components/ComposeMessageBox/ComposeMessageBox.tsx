import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import { UserImgWrapper } from './ComposeMessageBox.styles';
import { AppState, AppStateProvider,useAppState, appStateReducer, Message } from "../../AppStateContext"

export const ComposeMessageBox: React.SFC<ComposeMessageBoxProps> = (props: ComposeMessageBoxProps) => {

return(
  <div>
      <UserImgWrapper src="/images/hostImage@3x.png"/>
      <SendMessageField/>
  </div>

);
}

function SendMessageField() {
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
  const inputEl = React.useRef<HTMLInputElement>(null);

 const [state, dispatch] = useReducer(appStateReducer, useAppState());
  return (
    <>
      {/* in addition, inputEl only can be used with input elements. Yay! */}
      <input ref={inputEl} type="text" />
      <button onClick={() => dispatch("SEND_MSG",{messageContent:""})}>Focus the input</button>
    </>
  );
}
