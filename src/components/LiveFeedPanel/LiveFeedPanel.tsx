import React, { useState } from 'react';
import Jitsi from 'react-jitsi';
import YouTube from 'react-youtube';
import { LiveFeedPanelWrapper, FormGroup, Label, Input, Message, Button } from './LiveFeedPanel.styles';


const theme = {
  main: "mediumseagreen"
};


interface LiveFeedPanelProps {
  skin: string,
  store: any,
  client: any,
  opts:any ,
  onReady: any
  videoID: any
}

export const LiveFeedPanel: React.SFC<LiveFeedPanelProps> = (props: LiveFeedPanelProps) => {
  const [displayName, setDisplayName] = useState('No Live Event playing')
  const [roomName, setRoomName] = useState('noevent')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState({})
  const [onCall, setOnCall] = useState(false)
  return(
  <LiveFeedPanelWrapper>
      {/* <YouTube videoId={props.videoID} opts={props.opts} onReady={props.onReady} /> */}
      {onCall
                    ? (
                        <Jitsi
                            roomName={roomName}
                            displayName={displayName}
                            //password={password}
                            //loadingComponent={loader}
                            containerStyle={{
                              width: '100%', 
                              height: '100%' ,
                                //display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              
                            }}
                        />)
                    : (

                          
                      <>
                      <FormGroup>
                        <Label htmlFor="eventName">New Event Name</Label>
                        <input id="eventName" type='text' placeholder='Event name' value={roomName} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setRoomName(e.target.value)} />
                        <Message>Type a name for the event!</Message>
                        <Button type='submit'  onClick={(): void => setOnCall(true)} />
                        {/* <Button onClick={(): void => setOnCall(true)} type='submit'> Let&apos;s start! </Button> */}
                      </FormGroup>
                      </>
    )
  }
  </LiveFeedPanelWrapper>

)}



