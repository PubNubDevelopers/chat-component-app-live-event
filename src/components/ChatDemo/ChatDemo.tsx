import React, { useEffect, useState, useContext } from 'react';
import { ChatDemoWrapper } from "./ChatDemo.style"
import { LiveFeedPanelReactPlayer } from "../LiveFeedPanelReactPlayer"
import { LiveFeedPanelReactPlayerWrapper } from "../LiveFeedPanelReactPlayer/LiveFeedPanelReactPlayer.styles"
import { MessageListPanel } from "../MessageListPanel"
import { EventDetailsTop } from "../EventDetailsTop"
import { EventDetailsBottom } from "../EventDetailsBottom"
import {
  BottomButtonTextWrapper,
  BottomButtonImgWrapper,
  BottomFollowButtonWrapper,
  BottomShareButtonWrapper,
  ShareButtonsWrapper,
}
  from "../EventDetailsBottom/EventDetailsBottom.styles"

import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"

interface ChatInitProps {
}

export const ChatDemo: React.SFC<ChatInitProps> = (props: ChatInitProps) => {

  return (

    <ChatDemoWrapper >

    <LiveFeedPanelReactPlayerWrapper>

        <LiveFeedPanelReactPlayer
          //dailymotion
          //url="https://www.dailymotion.com/video/x61xx3z"
         
          //m3u8
          //url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
          
          //YouTube
          //url="https://youtu.be/y-E7_VHLvkE"
          
          //Vimeo
          //url="https://vimeo.com/90509568"

          //SoundCloud
          //url="https://soundcloud.com/miami-nights-1984/accelerated"

          //YouTube
          url="https://youtu.be/mJxsj51d-Pk"

          //Twitch
          //url="https://www.twitch.tv/summit1g"

        />

        <EventDetailsBottom />
        <ShareButtonsWrapper>

          <BottomShareButtonWrapper>
            <div>
              <BottomButtonImgWrapper src="/images/iconShare@3x.png" />
            </div>
            <div>
              <BottomButtonTextWrapper>Share</BottomButtonTextWrapper>
            </div>
          </BottomShareButtonWrapper>


          <BottomFollowButtonWrapper>
            <div>
              <BottomButtonImgWrapper src="/images/iconFollow@3x.png" />
            </div>
            <div>
              <BottomButtonTextWrapper>Follow</BottomButtonTextWrapper>
            </div>
          </BottomFollowButtonWrapper>

        </ShareButtonsWrapper>
      </LiveFeedPanelReactPlayerWrapper >

        <MessageListPanel />

    </ChatDemoWrapper>

  );

}




