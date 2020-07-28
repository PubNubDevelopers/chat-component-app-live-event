import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"
import { LiveFeedPanelYouTube } from './LiveFeedPanelYouTube';

const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
storiesOf("LiveFeedPanelYouTube", module)
    .add("Live Event Chat", () => (
        <LiveFeedPanelYouTube
            videoID="FIqwRr2cU4c"
            opts={opts}
            onReady={
                (event: { target: { pauseVideo: () => void; }; }) => { event.target.pauseVideo(); }}
        >

        </LiveFeedPanelYouTube>
    )
    );
