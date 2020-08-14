import React, { useReducer, useEffect, useRef }  from 'react';
import { MessageListPanelWrapper } from './MessageListPanel.styles';
import {  MessageInputWrapper, ComposeMessageBoxWrapper, UserImgWrapper, EmojiInputWrapper } from '../ComposeMessageBox/ComposeMessageBox.styles';
import { MessageList } from '../MessageList/MessageList';
import { AppStateProvider, appData, useAppState, Message, appStateReducer } from "../../AppStateContext"


interface MessageListPanelProps {


}

export const MessageListPanel: React.SFC<MessageListPanelProps> = (props: MessageListPanelProps) => {

  const textAreaEl = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer(appStateReducer, appData);

  const handleKeyDown: React.KeyboardEventHandler = event => {
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
    <>
      {/* <AppStateProvider> */}
        <MessageListPanelWrapper>
          <MessageList />
          <ComposeMessageBoxWrapper>
            <UserImgWrapper src={state.eventHostAvatar} />
            <MessageInputWrapper
              autoComplete="off"
              onKeyPress={handleKeyDown}
              ref={textAreaEl}
              id="messageContent"
            />
            {/* <EmojiInputWrapper src="https://nfodorpubnubcdn.imfast.io/images/emojiInput@3x.png" /> */}
          </ComposeMessageBoxWrapper>
        </MessageListPanelWrapper>
      {/* </AppStateProvider> */}
 </>
  );
}