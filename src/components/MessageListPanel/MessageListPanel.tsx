import React from 'react';
import { MessageListPanelWrapper } from './MessageListPanel.styles';
import { TextInputWrapper, ComposeMessageBoxWrapper, UserImgWrapper, EmojiInputWrapper } from '../ComposeMessageBox/ComposeMessageBox.styles';
import { MessageList } from '../MessageList/MessageList';
import { AppStateProvider,useAppState, Message } from "../../AppStateContext"
import { ComposeMessageBox,SendMessageField } from '../ComposeMessageBox/ComposeMessageBox';


interface MessageListPanelProps {


}

export const MessageListPanel: React.SFC<MessageListPanelProps> = (props: MessageListPanelProps) => {

  const {state} = useAppState(); 
  return (
    <div>
      
      <AppStateProvider>
        <MessageList/>
        <ComposeMessageBoxWrapper>
          <UserImgWrapper src={state.eventHostAvatar} />
          <TextInputWrapper>
            <SendMessageField />
          </TextInputWrapper>
          <EmojiInputWrapper src="/images/emojiInput@3x.png" />
        </ComposeMessageBoxWrapper>
      </AppStateProvider>
      

    </div>
  );
}