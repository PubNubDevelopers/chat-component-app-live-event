import React, { useEffect, useState, useContext } from 'react';
import { ChatDemoWrapper } from "./ChatDemo.style"
import { LiveFeedPanelReactPlayer } from "../LiveFeedPanelReactPlayer"
import { LiveFeedPanelReactPlayerWrapper } from "../LiveFeedPanelReactPlayer/LiveFeedPanelReactPlayer.styles"
import { MessageListPanel } from "../MessageListPanel"
import { EventDetailsTop } from "../EventDetailsTop"
import { EventDetailsBottom } from "../EventDetailsBottom"
import {PromotionAd} from "../PromotionAd";
import { MessageListPanelWrapper } from '../MessageListPanel/MessageListPanel.styles';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"

interface ChatInitProps {
  //You can set props here to send to the ChatDemo component.
  //propexample? : string,
}

export const ChatDemo: React.SFC<ChatInitProps> = (props: ChatInitProps) => {


  const opts = {
    width: "100%",
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
    },
  };

  return (

    <ChatDemoWrapper >   

       <LiveFeedPanelReactPlayerWrapper>

        <LiveFeedPanelReactPlayer
          url="https://www.youtube.com/watch?v=oqYbG8Zhoag"
          width="100%"
          height="250px"
        />

        <EventDetailsBottom />

      </LiveFeedPanelReactPlayerWrapper >

        <MessageListPanel />

    </ChatDemoWrapper>

  );

}




