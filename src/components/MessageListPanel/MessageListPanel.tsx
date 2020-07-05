import React from 'react';
import PropTypes from 'prop-types';
import { MessageListPanelWrapper } from './MessageListPanel.styles';
import { TextInputWrapper, ComposeMessageBoxWrapper, UserImgWrapper, EmojiInputWrapper } from '../ComposeMessageBox/ComposeMessageBox.styles';
import { MessageList } from '../MessageList/MessageList';
import { MessageListWrapper } from '../MessageList/MessageList.styles';
import {UserMessage} from '../Message/Message';
import * as sampleMessagesData from  './sample.json';
import { AppStateProvider,useAppState, Message } from "../../AppStateContext"


interface MessageListPanelProps {


}

export const MessageListPanel: React.SFC<MessageListPanelProps> = (props: MessageListPanelProps) => {

  const {state} = useAppState(); 
  return (
    <div>
      
      <AppStateProvider>
        {<MessageList messages={state.messages}/>}
      </AppStateProvider>
      
      <ComposeMessageBoxWrapper>
        <UserImgWrapper src="/images/hostImage@3x.png" />
        <TextInputWrapper></TextInputWrapper>
        <EmojiInputWrapper src="/images/emojiInput@3x.png" />
      </ComposeMessageBoxWrapper>

    </div>
  );
}