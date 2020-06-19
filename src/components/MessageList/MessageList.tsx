import React from 'react';
import PropTypes from 'prop-types';
import { MessageListWrapper } from './MessageList.styles';
import { Message,UserMessage } from '../Message/Message';


interface MessageListProps {
  messages: UserMessage[],
  skin: any,
  store: any,
  client: any,
}

export const MessageList: React.SFC<MessageListProps> = (props: MessageListProps) => {
  const msgList: UserMessage[] = Array.from(props.messages.default);
//   for(let i=0; i<props.messages.length; i++){
//     console.log(props.messages[i].key); //use i instead of 0
// }

  const Messages = msgList.map( (onemessage: UserMessage) => {
    return (
      <Message skin="" store="" client="" message={onemessage} key={onemessage.key}/>
    
    );
    }
    );
return (
  <MessageListWrapper>

    {Messages}

  </MessageListWrapper>
);

}

