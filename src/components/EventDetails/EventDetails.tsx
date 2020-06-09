import React from 'react';
import { EventDetailsWrapper,TitleWrapper } from './EventDetails.styles';


interface EventDetailsProps {
  skin: any,
  store: any,
  client: any,
}

export const EventDetails: React.SFC<EventDetailsProps> = (props: EventDetailsProps) => {

  return( 
    <EventDetailsWrapper>
        <div><img src="/images/statusBar.png"></img></div>
        <TitleWrapper><span>eSport: Las Vegas Tournament 2020</span></TitleWrapper>

    </EventDetailsWrapper>
  );


}