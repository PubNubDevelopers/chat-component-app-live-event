import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"

import { MessageList } from '../MessageList/MessageList';
import { MessageListPanel } from './MessageListPanel';
storiesOf("MessageListPanel", module)
    .add("Live event", () => (
        <AppStateProvider>
            {<MessageListPanel></MessageListPanel>}
        </AppStateProvider>

    ))