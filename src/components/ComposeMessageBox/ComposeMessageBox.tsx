import React, {useReducer,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import { UserImgWrapper } from './ComposeMessageBox.styles';
import {appData, AppState, AppStateProvider,useAppState, appStateReducer, Message } from "../../AppStateContext"


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

  const textAreaEl = useRef(null);
  const [state, dispatch] = useReducer(appStateReducer,appData);

  const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          dispatch({
            type: "SEND_MESSAGE",
            payload: textAreaEl.current.value
          });
          textAreaEl.current.value = "";
          console.log('do validate')
        }
    // textAreaEl.current.value =  "";
    // textAreaEl.current.focus();
  };

  return (
    <section style={{ 
      textAlign: "center",
      paddingLeft: "50px",
      marginRight: "50px",
      top: "23px",
      width: "120px",
      position:"absolute",
      left: "10px",
      borderWidth: "0px",
      borderRadius: "230px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color:"white",
      
      }}>
      {/* <div>
        <button onClick={handleBtnClick}>Focus and Populate Text Field</button>
      </div> */}
      {/* <input onKeyPress={handleKeyDown} ref={textAreaEl} id="story" rows="5" cols="33" /> */}

      <input onKeyPress={handleKeyDown} ref={textAreaEl} id="messageContent"  />
    </section>
  );
};

