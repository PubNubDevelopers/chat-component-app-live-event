import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"
import { LiveFeedPanelReactPlayer } from './LiveFeedPanelReactPlayer';

const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
storiesOf("LiveFeedPanelReactPlayer", module)
    .add("Live Event Chat", () => (
        <LiveFeedPanelReactPlayer
            url="oqYbG8Zhoag"
            width="100%"
            height="100%"

        >

        </LiveFeedPanelReactPlayer>
    )
    );
