import React, { useCallback, FunctionComponent, useEffect, useState, useContext,useRef } from 'react';
import { MessageListWrapper } from './MessageList.styles';
import { Message } from '../Message/Message';
import {UserMessage} from '../../AppStateContext';

interface MessageListProps {
  messages: UserMessage[],
}

export const MessageList: React.SFC<MessageListProps> = (props: MessageListProps) => {
  
 

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    (messagesEndRef && messagesEndRef.current) ? messagesEndRef.current.scrollIntoView({ behavior: "smooth" }) : {}
  }

  useEffect(scrollToBottom, [props.messages]); 

  const Messages = Array.from(props.messages).map( (onemessage: UserMessage) => {
    //const elementRef = useRef(null);  
    return (
      <>
      <div ref={messagesEndRef} />
      <Message message={onemessage} key={onemessage.key}/>
      </>
    );
  }
  );

return (
  <MessageListWrapper>
      {Messages}
  </MessageListWrapper>

);

}

