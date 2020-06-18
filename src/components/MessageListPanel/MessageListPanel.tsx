import React from 'react';
import PropTypes from 'prop-types';
import { MessageListPanelWrapper } from './MessageListPanel.styles';
import {  TextInputWrapper, ComposeMessageBoxWrapper, UserImgWrapper, EmojiInputWrapper } from '../ComposeMessageBox/ComposeMessageBox.styles';


interface MessageListPanelProps {
  skin: any,
  store: any,
  client: any,
}

export const MessageListPanel: React.SFC<MessageListPanelProps> = (props: MessageListPanelProps) => {

  return(  
  <ComposeMessageBoxWrapper>
      <UserImgWrapper src="/images/hostImage@3x.png"/>
      <TextInputWrapper></TextInputWrapper>
      <EmojiInputWrapper  src="/images/emojiInput@3x.png"/>

      
  </ComposeMessageBoxWrapper>
    );


}