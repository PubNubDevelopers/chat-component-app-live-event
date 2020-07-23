import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"
import { LiveFeedPanelJitsi } from './LiveFeedPanelJitsi';

const opts = {
    height: "100%",
    width: "850px",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
storiesOf("LiveFeedPanelYouTube", module)
    .add("Live Event Chat", () => (
        <LiveFeedPanelJitsi
            videoID="jZtxlp664yU"
            opts={opts}
            onReady={
                (event: { target: { pauseVideo: () => void; }; }) => { event.target.pauseVideo(); }}
        >

        </LiveFeedPanelJitsi>
    )
    );
