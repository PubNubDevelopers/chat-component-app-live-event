import React from 'react';
import { EventDetailWrapper,BottomFollowButtonWrapper, BottomShareButtonWrapper, EventDetailsTopWrapper, EventDetailsBottomWrapper, TitleWrapper } from './EventDetailsTop.styles';


interface EventDetailsTopProps {
  skin: any,
  store: any,
  client: any,
}

export const EventDetailsTop: React.SFC<EventDetailsTopProps> = (props: EventDetailsTopProps) => {

  return( 

        <EventDetailsTopWrapper>
            <div><img src="/images/statusBar.png"></img></div>
            <TitleWrapper><span>eSport: Las Vegas Tournament 2020</span></TitleWrapper>
        </EventDetailsTopWrapper>


  );


}
