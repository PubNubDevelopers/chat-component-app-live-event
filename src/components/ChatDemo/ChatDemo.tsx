import React, { useEffect, useState,useContext } from 'react';
import {ChatDemoWrapper} from "./ChatDemo.style"
import {LiveFeedPanel} from "../LiveFeedPanel"
import {MessageListPanel} from "../MessageListPanel"
import {EventDetailsTop} from "../EventDetailsTop"
import {EventDetailsBottom} from "../EventDetailsBottom"
import PromotionAd from "../PromotionAd";
import { MessageListPanelWrapper } from '../MessageListPanel/MessageListPanel.styles';
import { useAppState,AppStateProvider,AppStateContext } from "../../AppStateContext"

interface ChatInitProps {

}

export const ChatDemo: React.SFC<ChatInitProps> = (props: ChatInitProps) => {
  //const ChatDemo:FunctionComponent<{ props?: ChatInitProps }> = ({ props = {} }) => {
  
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
 
  const [time, setTime] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  

const opts = {
  height: "100%",
  width:  "850px",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

return(
  
  <ChatDemoWrapper >

     { false && <EventDetailsTop/>}

     <LiveFeedPanel videoID="jZtxlp664yU"  opts={opts} onReady={(event) => {
       event.target.pauseVideo();
     }}/>

   <EventDetailsBottom />
     
     <MessageListPanelWrapper>
     
          <MessageListPanel/>

     </MessageListPanelWrapper>
       
       
       {/* <ContentModPanel skin={props.skin} store={props.store} client={props.client}>

       </ContentModPanel> */}
  </ChatDemoWrapper>
  
);

}




