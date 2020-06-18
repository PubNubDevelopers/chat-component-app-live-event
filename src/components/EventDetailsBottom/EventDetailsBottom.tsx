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
  TitleWrapper 
} from './EventDetailsBottom.styles';


interface EventDetailsBottomProps {
  skin: any,
  store: any,
  client: any,
}

export const EventDetailsBottom: React.SFC<EventDetailsBottomProps> = (props: EventDetailsBottomProps) => {

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
                        <ReactionButtonWrapper reaction="ThumbUp" appearindex="3" > </ReactionButtonWrapper>
                        <ReactionButtonWrapper reaction="Mad" appearindex="4" > </ReactionButtonWrapper>
                        <ReactionButtonWrapper reaction="Sad" appearindex="5" > </ReactionButtonWrapper>
                      </ReactionsWrapper>

        </EventDetailsBottomWrapper>


  );


}
