import React from 'react';
import { EventDetailWrapper, EventDetailsTopWrapper, EventDetailsBottomWrapper, TitleWrapper,BottomShareButtonWrapper } from './EventDetails.styles';


interface EventDetailsProps {
  skin: any,
  store: any,
  client: any,
}

export const EventDetails: React.SFC<EventDetailsProps> = (props: EventDetailsProps) => {

  return( 
    <EventDetailWrapper>

        <EventDetailsTopWrapper>
            <div><img src="/images/statusBar.png"></img></div>
            <TitleWrapper><span>eSport: Las Vegas Tournament 2020</span></TitleWrapper>
        </EventDetailsTopWrapper>


        <EventDetailsBottomWrapper>
                      <BottomShareButtonWrapper> 
                        <div>
                        <img src="/images/share.png"></img>
                        </div>
                          
                      </BottomShareButtonWrapper>
        </EventDetailsBottomWrapper>


    </EventDetailWrapper>
  );


}