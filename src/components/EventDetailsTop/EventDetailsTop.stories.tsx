import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"
import { EventDetailsTop } from './EventDetailsTop';


storiesOf("EventDetailsTop", module)
    .add("Live Event Chat", () => (

        <AppStateProvider>
            <EventDetailsTop>

            </EventDetailsTop>
        </AppStateProvider>
    )
    );
