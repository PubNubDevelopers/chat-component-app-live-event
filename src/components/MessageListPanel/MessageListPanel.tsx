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
        {<MessageList  messages={state.messages}/>}
      
      
      <ComposeMessageBoxWrapper>
        <UserImgWrapper src="/images/hostImage@3x.png" />
        {/* <TextInputWrapper> */}
<SendMessageField/>
       {/* </TextInputWrapper> */}
        <EmojiInputWrapper src="/images/emojiInput@3x.png" />
      </ComposeMessageBoxWrapper>
      </AppStateProvider>

    </div>
  );
}