import React, {useReducer,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import { UserImgWrapper } from './ComposeMessageBox.styles';
import {Action, appData, AppState, AppStateProvider,useAppState, appStateReducer, Message } from "../../AppStateContext"


interface ComposeMessageBoxProps {

}
export const ComposeMessageBox: React.SFC<ComposeMessageBoxProps> = (props: ComposeMessageBoxProps) => {

return(
  <>
    <SendMessageField></SendMessageField>

  </>

);
}
interface SendMessageProps {

}

export const SendMessageField = () => {

  const textAreaEl = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer(appStateReducer,appData);

  
  const handleKeyDown: React.KeyboardEventHandler  = event => {
    if (event.key === 'Enter') {

      if (textAreaEl?.current !== null) {

        dispatch({
          type: "SEND_MESSAGE",
          payload: { messageContent: textAreaEl.current!.value! }
        } as {
          type: "SEND_MESSAGE",
          payload: {
            messageContent: string
          }
          }
        );
        textAreaEl.current!.value = "";
        console.log('do validate');
      }

        }
  };

  return (
    <section style={{ 
      textAlign: "center",
      paddingLeft: "15px",
      marginRight: "50px",
      paddingTop: "12px",
      top: "-4px",
      width: "258px",
      height: "46px",
      position: "absolute",
      left: "45px",
      borderWidth: "0px",
      borderRadius: "230px",
      color:"white",
      }}>
      

      <input autoComplete="off"
        onKeyPress={handleKeyDown}
        style={{
          fontSize: "larger",
          borderWidth: "0px",
          borderRadius: "100px",
          backgroundColor: "white",
          top: "8px",
          height: "30px",
          left: "5px"
        }}
        ref={textAreaEl}
        id="messageContent"
      />
    </section>
  );
};

