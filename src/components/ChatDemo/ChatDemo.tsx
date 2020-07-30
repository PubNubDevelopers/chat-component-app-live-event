import React, { useEffect, useState, useContext } from 'react';
import { ChatDemoWrapper } from "./ChatDemo.style"
import { LiveFeedPanelYouTube } from "../LiveFeedPanelYouTube"
import { LiveFeedPanelYouTubeWrapper } from "../LiveFeedPanelYouTube/LiveFeedPanelYouTube.styles"
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
    },
  };

  return (

    <ChatDemoWrapper >
      
      <LiveFeedPanelYouTubeWrapper>
        <LiveFeedPanelYouTube videoID="FIqwRr2cU4c" opts={opts} onReady={(event: { target: { pauseVideo: () => void; }; }) => { event.target.pauseVideo(); }} />

        <EventDetailsBottom />
      </LiveFeedPanelYouTubeWrapper>

      <MessageListPanelWrapper>

        <MessageListPanel />

      </MessageListPanelWrapper>
    </ChatDemoWrapper>

  );

}




