import React, { useCallback, FunctionComponent, useEffect, useState, useContext,useRef } from 'react';
import { MessageListWrapper } from './MessageList.styles';
import { Message } from '../Message/Message';
import {UserMessage} from '../../AppStateContext';

interface MessageListProps {
  messages: UserMessage[],
}

export const MessageList: React.SFC<MessageListProps> = (props: MessageListProps) => {
  
  const elementRef = useRef(null);  

  // function getScroll() {
  //   const data = elementRef.current ?  elementRef.current.getBoundingCLientRect() : 0;
  //   const { bottom, top, left, right } = data;
  //   return { bottom, top, left, right };
  // }

  const handleScroll = () => {

    if (elementRef.current !== null) {
      console.log("Scrolling...");
      elementRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
      //setScrollPosition(getScroll())
    }

  }
  useEffect(() => {
    
    if (elementRef.current !== null) {
      elementRef.addEventListener('scroll', handleScroll);
      return () => elementRef.removeEventListener('scroll', handleScroll)
    }
 
  }, []) // Empty array ensures that effect is only run on mount and unmount

 //const [scrollPosition, setScrollPosition] = useState(handleScroll)


  const Messages = Array.from(props.messages).map( (onemessage: UserMessage) => {
    
    


    return (
      <>
      <div ref={elementRef} />
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

