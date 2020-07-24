import React, { useCallback,FunctionComponent, useReducer, useEffect, useState, useContext, useRef } from 'react';
import { MessageListWrapper } from './MessageList.styles';
import { Message } from '../Message/Message';
import { UserMessage, appStateReducer, appData,useAppState } from '../../AppStateContext';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface MessageListProps {
  messages?: UserMessage[],
}

export const MessageList: React.SFC<MessageListProps> = (props: MessageListProps) => {
  
  const { state } = useAppState();
  const [stopOnScroll, setStopOnScroll] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null) //This is our reference to the instance of this component in the DOM
  //const listBottomPos = messagesEndRef.current.getBoundingClientRect().bottom;
  //console.log(`listBottomPos: ${listBottomPos}`);
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" });
    }

  useScrollPosition(({ prevPos, currPos }) => {
    //const bottom = messagesEndRef.current.scrollHeight - currPos.y;//=== e.target.clientHeight;
    const isShow = currPos.y > prevPos.y
    console.log(`${isShow}`);
    if (isShow !== stopOnScroll) setStopOnScroll(isShow)
  }, [])

    useEffect(scrollToBottom, [state.messages]);

  

  const Messages = Array.from(state.messages).map((onemessage: UserMessage) => {
    return (
      <>
        <div ref={messagesEndRef} />
        <Message message={onemessage} key={onemessage.key} />
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

