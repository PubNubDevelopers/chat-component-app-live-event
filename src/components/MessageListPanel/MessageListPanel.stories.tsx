import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { AppStateProvider } from "../../AppStateContext"

import { MessageListPanel } from './MessageListPanel';
import { MessageListPanelWrapper } from './MessageListPanel.styles';

storiesOf("MessageListPanel", module)
    .add("Live event", () => (
        <AppStateProvider>

            <MessageListPanelWrapper>

                <MessageListPanel />

            </MessageListPanelWrapper>
        
        </AppStateProvider>

    ))