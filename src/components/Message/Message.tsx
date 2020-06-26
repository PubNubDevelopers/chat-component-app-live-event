import React from 'react';
import PropTypes from 'prop-types';
import { MessageMessageWrapper, MessageWrapper, AvatarWrapper,SenderNameWrapper } from './Message.styles';
import { generateUUID } from 'pubnub';

export interface Message {
  internalKey: string ;

}

export class UserMessage implements Message {
  internalKey: string ;
  key: string;
  senderId: string;
  message: string;
  UserAvatar: string;
  timetoken: string;
  senderName: string;
  dateFormat: string;
  reactions: string;
  addMessageReaction: string;
  addActions: string;
  

  constructor(payload: string) {
    this.internalKey = generateUUID.toString();
    var data = JSON.parse(payload);

    if (!data.key ) {
      throw new Error('Invalid message payload received: ' + payload);
    }
    this.internalKey = data.internalKey;
    this.message = data.message;
    this.key= data.key;
    this.UserAvatar= data.UserAvatar;
    this.timetoken= data.timetoken;
    this.senderId= data.senderId;
    this.senderName= data.senderName;
    this.dateFormat= data.dateFormat;
    this.reactions= data.reactions;
    this.addMessageReaction= data.addMessageReaction;
    this.addActions= data.addActions;
  }
}

interface MessageProps {
  message: UserMessage;
}

export const Message: React.SFC<MessageProps> = (props: MessageProps) => {

return (
  <MessageWrapper>
    <AvatarWrapper src={props.message.UserAvatar}/>
    <SenderNameWrapper>{props.message.senderName}</SenderNameWrapper>
    <MessageMessageWrapper>{props.message.message}</MessageMessageWrapper>
    {/* { props.message.key}
    { props.message.senderName}
    { props.message.timetoken}
    { props.message.message} */}
  </MessageWrapper>
);

}

