import React from 'react';
import { BottomFollowButtonWrapper, BottomShareButtonWrapper, EventDetailsBottomWrapper, TitleWrapper } from './EventDetailsBottom.styles';


interface EventDetailsBottomProps {
  skin: any,
  store: any,
  client: any,
}

export const EventDetailsBottom: React.SFC<EventDetailsBottomProps> = (props: EventDetailsBottomProps) => {

  return( 

        <EventDetailsBottomWrapper>
                      <BottomShareButtonWrapper> 
                        <div>
                        <img src="/images/share.png"></img>
                        </div>
                          
                      </BottomShareButtonWrapper>

                      <BottomFollowButtonWrapper> 
                        <div>
                        <img src="/images/follow.png"></img>
                        </div>
                          
                      </BottomFollowButtonWrapper>
        </EventDetailsBottomWrapper>


  );


}
