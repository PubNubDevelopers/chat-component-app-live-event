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
import type {} from "styled-components/cssprop";
interface EventDetailsBottomProps {
  skin: any,
  store: any,
  client: any,
}

export const EventDetailsBottom: React.SFC<EventDetailsBottomProps> = (props: EventDetailsBottomProps) => {
  const emoji_base_color = "#FFDA6A";
  const emoji_like_color ="#548DFF";
  const emoji_love_color="#F55064";
  const emoji_angry_color= "#D5234C";
  const emoji_white_color= "#FFFFFF";
  const emoji_black_color= "#000000";
  const emoji_text_color= "#8A8A8A";
  return( 

        <EventDetailsBottomWrapper>


          <HostImageWrapper src="/images/hostImage@3x.png"/>

            <HostNameWrapper>eLeague Las Vegas Tournament</HostNameWrapper>
                <EventIDWrapper>Event  ID: 246 209 481</EventIDWrapper>

                      <BottomShareButtonWrapper> 

                        <div>
                        <BottomButtonImgWrapper src="/images/iconShare@3x.png"/>
                        <BottomButtonTextWrapper>Share</BottomButtonTextWrapper>
                        </div>
                      </BottomShareButtonWrapper>

                      <BottomFollowButtonWrapper> 
                        <div>
                        <BottomButtonImgWrapper src="/images/iconFollow@3x.png"/>
                        <BottomButtonTextWrapper>Follow</BottomButtonTextWrapper>
                        </div>
                      </BottomFollowButtonWrapper>

                      <ReactionsWrapper> 
                        <ReactionButtonWrapper reaction="LOL" appearindex="1" />
                        <ReactionButtonWrapper reaction="Heart" appearindex="2" > </ReactionButtonWrapper>
                        {/* <ReactionButtonWrapper reaction="ThumbUp" appearindex="3" > </ReactionButtonWrapper> */}
                        <Emoji appearindex="3" emoji_white_color={emoji_white_color}>
<EmojiHand>
  <EmojiThumb ></EmojiThumb>
</EmojiHand>
</Emoji>

{/* <Emoji emoji_white_color={emoji_white_color}>
<EmojiHaha>
  <EmojiFace >
  <EmojiEyes></EmojiEyes>
  <EmojiMouth>
    <EmojiTongue></EmojiTongue>
  </EmojiMouth>
  </EmojiFace>
</EmojiHaha>
</Emoji> */}




                        <ReactionButtonWrapper reaction="Mad" appearindex="4" > </ReactionButtonWrapper>
                        <ReactionButtonWrapper reaction="Sad" appearindex="5" > </ReactionButtonWrapper>
                      </ReactionsWrapper>

        </EventDetailsBottomWrapper>


  );


}
