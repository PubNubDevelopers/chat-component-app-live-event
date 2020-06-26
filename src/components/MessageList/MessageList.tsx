import React, { useCallback, FunctionComponent, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { MessageListWrapper } from './MessageList.styles';
import { Message,UserMessage } from '../Message/Message';
import { LiveEventContext } from '../../liveevents-context';


interface MessageListProps {
  messages: UserMessage[],
}

export const MessageList: React.SFC<MessageListProps> = (props: MessageListProps) => {


  const msgList: UserMessage[] = Array.from(props.messages.default);
//   for(let i=0; i<props.messages.length; i++){
//     console.log(props.messages[i].key); //use i instead of 0
// }
  const [messages, setMessages] = useState([]);
  const Messages = msgList.map( (onemessage: UserMessage) => {
          return (
            <Message message={onemessage} key={onemessage.key}/>
          );
    }
    );

    // useEffect(() => {
    //   const liveEventContext = useContext(LiveEventContext)
    //   try{
        
 
    //   }
    //     catch(e) {
    //         console.log(e);
    // }
    // }, []);

return (
  <MessageListWrapper>

  
{Messages}

</MessageListWrapper>

);

}

