import React from 'react';
import { MessageMessageWrapper, MessageWrapper, AvatarWrapper,SenderNameWrapper } from './Message.styles';
import {UserMessage} from '../../AppStateContext'


interface MessageProps {
  message: UserMessage;
}

export const Message: React.SFC<MessageProps> = (props: MessageProps) => {

return (
  <MessageWrapper>
    <AvatarWrapper src={props.message.UserAvatar}/>
    <SenderNameWrapper>{props.message.senderName}</SenderNameWrapper>
    <MessageMessageWrapper>{props.message.message}</MessageMessageWrapper>
  </MessageWrapper>
);

}

