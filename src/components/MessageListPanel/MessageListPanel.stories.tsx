import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { AppStateProvider } from "../../AppStateContext"

import { MessageListPanel } from './MessageListPanel';
storiesOf("MessageListPanel", module)
    .add("Live event", () => (
        <AppStateProvider>
            {<MessageListPanel></MessageListPanel>}
         </AppStateProvider>

    ))