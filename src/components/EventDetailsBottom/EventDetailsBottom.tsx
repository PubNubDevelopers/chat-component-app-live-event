import React, { useRef, useState } from 'react';
import { motion, transform } from "framer-motion";
import {
  ReactionButtonWrapper,
  ReactionsWrapper,
  EventIDWrapper,
  HostNameWrapper,
  HostImageWrapper,
  BottomButtonTextWrapper,
  BottomButtonImgWrapper,
  BottomFollowButtonWrapper,
  BottomShareButtonWrapper,
  EventDetailsBottomWrapper,
  ShareButtonsWrapper,
  EventInfoWrapper,
  EventButtonsWrapper,
  BaseEmoji, EmojiHand, EmojiThumb, Emoji, EmojiHaha, EmojiFace, EmojiEyes, EmojiMouth, EmojiTongue,
  TitleWrapper
} from './EventDetailsBottom.styles';
import { AppStateProvider, useAppState, Message } from "../../AppStateContext"

import type { } from "styled-components/cssprop";

interface EventDetailsBottomProps {

}

export const EventDetailsBottom: React.SFC<EventDetailsBottomProps> = (props: EventDetailsBottomProps) => {

  const { state } = useAppState();

  const [laugh, setLaugh] = useState(0);
  const [thumbUp, setThumbUp] = useState(0);
  const [love, setLove] = useState(0);
  const [mad, setMad] = useState(0);
  const [sad, setSad] = useState(0);

  const between = (min, max) => Math.floor(
      Math.random() * (max - min) + min
    )

  const ref = React.createRef();
  return (

    <EventDetailsBottomWrapper>
      <HostImageWrapper src={state.eventAvatar} />

      <EventInfoWrapper>
        <HostNameWrapper>{state.eventName}</HostNameWrapper>
        <EventIDWrapper>Event  ID: {state.eventId}</EventIDWrapper>
      </EventInfoWrapper>

      <EventButtonsWrapper>
        <ReactionsWrapper>


          <ReactionButtonWrapper animate={{ y: [laugh, 0] }} onClick={() => {
            const wayUp = between(-280, -260);
            setLaugh(wayUp);
          }} src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2298_E0Jyd9BW8ML0PDLn60wlVeuEhVRHSyGw.gif" />

          <ReactionButtonWrapper animate={{ y: [love, 0] }} onClick={() => {
            const wayUp = between(-280, -260);
            setLove(wayUp);
          }} src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2304_b7hKIS35rjCAPVbD8EnPSfYTJJC1b0o5.gif" />

          <ReactionButtonWrapper animate={{ y: [thumbUp, 0] }} onClick={() => {
            const wayUp = between(-280, -260);
            setThumbUp(wayUp);
          }} src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2402_X1lpqTxi33xSwSTLOSPTfMo1KyYWyUTe.gif" />

          <ReactionButtonWrapper animate={{ y: [mad, 0] }} onClick={() => {
            const wayUp = between(-280, -260);
            setMad(wayUp);
          }} src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2322_ps7ltjKbJF1Mvz2MsxJj08EIo3Lyip7f.gif" />

          <ReactionButtonWrapper animate={{ y: [sad, 0] }} onClick={() => {
            const wayUp = between(-280, -260);
            setSad(wayUp)
          }} src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2318_tJL75iT2zYJkH995p8NgDeTuHTc3WZVV.gif" />

        </ReactionsWrapper>

      <ShareButtonsWrapper>
          
            <BottomShareButtonWrapper>
              <div>
                <BottomButtonImgWrapper src="https://nfodorpubnubcdn.imfast.io/images/iconShare@3x.png" />
              </div>
              <div>
                <BottomButtonTextWrapper>Share</BottomButtonTextWrapper>
              </div>
            </BottomShareButtonWrapper>

  
            <BottomFollowButtonWrapper>
              <div>
                <BottomButtonImgWrapper src="https://nfodorpubnubcdn.imfast.io/images/iconFollow@3x.png" />
              </div>
              <div>
                <BottomButtonTextWrapper>Follow</BottomButtonTextWrapper>
              </div>
          </BottomFollowButtonWrapper>
          
        </ShareButtonsWrapper>
        


      </EventButtonsWrapper>
    </EventDetailsBottomWrapper>


  );


}
