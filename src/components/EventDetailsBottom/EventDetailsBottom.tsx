import React from 'react';
import { ReactionButtonWrapper, 
  ReactionsWrapper, 
  EventIDWrapper, 
  HostNameWrapper, 
  HostImageWrapper, 
  BottomButtonTextWrapper,
  BottomButtonImgWrapper, 
  BottomFollowButtonWrapper, 
  BottomShareButtonWrapper, 
  EventDetailsBottomWrapper,
  BaseEmoji,EmojiHand,EmojiThumb,Emoji,EmojiHaha,EmojiFace,EmojiEyes,EmojiMouth,EmojiTongue,
  TitleWrapper 
} from './EventDetailsBottom.styles';
import { AppStateProvider,useAppState, Message } from "../../AppStateContext"

import type {} from "styled-components/cssprop";

interface EventDetailsBottomProps {

}

export const EventDetailsBottom: React.SFC<EventDetailsBottomProps> = (props: EventDetailsBottomProps) => {

  const {state} = useAppState(); 

  return( 

      <EventDetailsBottomWrapper>
      <HostImageWrapper src={state.eventAvatar}/>

            <HostNameWrapper>{state.eventName}</HostNameWrapper>
            <EventIDWrapper>Event  ID: {state.eventId}</EventIDWrapper>

                      <BottomShareButtonWrapper> 

                        <div>
          <BottomButtonImgWrapper src="https://nfodorpubnubcdn.imfast.io/images/iconShare@3x.png" />
                        <BottomButtonTextWrapper>Share</BottomButtonTextWrapper>
                        </div>
                      </BottomShareButtonWrapper>

                      <BottomFollowButtonWrapper> 
                        <div>
          <BottomButtonImgWrapper src="https://nfodorpubnubcdn.imfast.io/images/iconFollow@3x.png"/>
                        <BottomButtonTextWrapper>Follow</BottomButtonTextWrapper>
                        </div>
                      </BottomFollowButtonWrapper>

                      <ReactionsWrapper> 
                        <ReactionButtonWrapper src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2298_E0Jyd9BW8ML0PDLn60wlVeuEhVRHSyGw.gif"/>
                        <ReactionButtonWrapper src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2304_b7hKIS35rjCAPVbD8EnPSfYTJJC1b0o5.gif" />
                        <ReactionButtonWrapper src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2402_X1lpqTxi33xSwSTLOSPTfMo1KyYWyUTe.gif" />
                        {/* <Emoji appearindex="3" emoji_white_color={emoji_white_color}>
                            <EmojiHand>
                              <EmojiThumb ></EmojiThumb>
                            </EmojiHand>
                            </Emoji> */}
                        <ReactionButtonWrapper src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2322_ps7ltjKbJF1Mvz2MsxJj08EIo3Lyip7f.gif" / >
                        <ReactionButtonWrapper src="https://d1j8pt39hxlh3d.cloudfront.net/products/previews/RES3POBSZ353HFVPZOKR/2318_tJL75iT2zYJkH995p8NgDeTuHTc3WZVV.gif" />
                      </ReactionsWrapper>

        </EventDetailsBottomWrapper>


  );


}
