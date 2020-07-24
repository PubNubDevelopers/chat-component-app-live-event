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
storiesOf("LiveFeedPanelJitsi", module)
    .add("Live Event Chat", () => (
        <LiveFeedPanelJitsi>

        </LiveFeedPanelJitsi>
    )
    );
