import React, { useCallback, FunctionComponent, useEffect, useState, useContext } from 'react';
import { MessageListWrapper } from './MessageList.styles';
import { Message } from '../Message/Message';
import {UserMessage} from '../../AppStateContext';
interface MessageListProps {
  messages: UserMessage[],
}

export const MessageList: React.SFC<MessageListProps> = (props: MessageListProps) => {
  const Messages = Array.from(props.messages).map( (onemessage: UserMessage) => {
          return (
            <Message message={onemessage} key={onemessage.key}/>
          );
    }
    );

return (
  <MessageListWrapper>
      {Messages}
  </MessageListWrapper>

);

}

