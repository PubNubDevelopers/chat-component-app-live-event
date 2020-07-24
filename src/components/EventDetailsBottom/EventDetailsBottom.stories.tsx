import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"
import { EventDetailsBottom } from './EventDetailsBottom';


storiesOf("EventDetailsBottom", module)
    .add("Live Event Chat", () => (

        <AppStateProvider>
        <EventDetailsBottom >

            </EventDetailsBottom>
        </AppStateProvider>
    )
    );
