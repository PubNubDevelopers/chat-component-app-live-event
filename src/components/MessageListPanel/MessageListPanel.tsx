import React from 'react';
import PropTypes from 'prop-types';
import { MessageListPanelWrapper } from './MessageListPanel.styles';
import { TextInputWrapper, ComposeMessageBoxWrapper, UserImgWrapper, EmojiInputWrapper } from '../ComposeMessageBox/ComposeMessageBox.styles';
import { MessageList } from '../MessageList/MessageList';
import { MessageListWrapper } from '../MessageList/MessageList.styles';
import {UserMessage} from '../Message/Message';
import * as sampleMessagesData from  './sample.json';


interface MessageListPanelProps {
  skin: any,
  store: any,
  client: any,

}

export const MessageListPanel: React.SFC<MessageListPanelProps> = (props: MessageListPanelProps) => {


  //Dumnmy data before connecting to PubNub
  // messages.push(new UserMessage(`{
  //   "key":"GFTYRH1", 
  //   "senderId":"",
  //   "message":"Incredible!!!",
  //   "UserAvatar": "",
  //   "timetoken": "",
  //   "senderName": "Patricia",
  //   "dateFormat": "",
  //   "reactions": "",
  //   "addMessageReaction": "",
  //   "addActions": ""
  // }`));
  //messages.push(new UserMessage(`{"msgid":"DSFDFSF", "name":"Patricia","message":"Incredible!!!"}`));

  return (

    <div>
      <MessageList messages={ sampleMessagesData} skin="" store={props.store} client={props.client}/ >

      <ComposeMessageBoxWrapper>
        <UserImgWrapper src="/images/hostImage@3x.png" />
        <TextInputWrapper></TextInputWrapper>
        <EmojiInputWrapper src="/images/emojiInput@3x.png" />
      </ComposeMessageBoxWrapper>

    </div>
  );


}