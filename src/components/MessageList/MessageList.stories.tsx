import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"

import { MessageList } from './MessageList';

storiesOf("MessageList", module)
    .add("Live event", () => (
        <AppStateProvider>
            {<MessageList/>}
        </AppStateProvider>
        
))