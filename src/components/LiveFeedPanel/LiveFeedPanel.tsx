import React from 'react';
import Jitsi from 'react-jitsi';
import YouTube from 'react-youtube';
import { LiveFeedPanelWrapper } from './LiveFeedPanel.styles';





interface LiveFeedPanelProps {
  skin: string,
  store: any,
  client: any,
  opts:any ,
  onReady: any
  videoID: any
}

export const LiveFeedPanel: React.SFC<LiveFeedPanelProps> = (props: LiveFeedPanelProps) => {

  return(
  <LiveFeedPanelWrapper>
      <YouTube videoId={props.videoID} opts={props.opts} onReady={props.onReady} />
  </LiveFeedPanelWrapper>

    
  );

}

