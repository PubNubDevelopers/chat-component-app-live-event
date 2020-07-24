import React, { useEffect, useState, useContext } from 'react';
import { ChatDemoWrapper } from "./ChatDemo.style"
import { LiveFeedPanelYouTube } from "../LiveFeedPanelYouTube"
import { MessageListPanel } from "../MessageListPanel"
import { EventDetailsTop } from "../EventDetailsTop"
import { EventDetailsBottom } from "../EventDetailsBottom"
import PromotionAd from "../PromotionAd";
import { MessageListPanelWrapper } from '../MessageListPanel/MessageListPanel.styles';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"

interface ChatInitProps {
  //You can set props here to send to the ChatDemo component.
  //propexample? : string,
}

export const ChatDemo: React.SFC<ChatInitProps> = (props: ChatInitProps) => {


  const opts = {
    height: "100%",
    width: "850px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (

    <ChatDemoWrapper >

      <LiveFeedPanelYouTube videoID="jZtxlp664yU" opts={opts} onReady={(event: { target: { pauseVideo: () => void; }; }) => {event.target.pauseVideo();}} />

      <EventDetailsBottom />
      <MessageListPanelWrapper>

        <MessageListPanel />

      </MessageListPanelWrapper>
    </ChatDemoWrapper>

  );

}




