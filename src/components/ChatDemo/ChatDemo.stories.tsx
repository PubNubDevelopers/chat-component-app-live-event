import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"
import { ChatDemo } from './ChatDemo';
import { ChatDemoWrapper } from './ChatDemo.style';


storiesOf("ChatDemo", module)
    .add("Live Event Chat", () => (
        <AppStateProvider>
            <ChatDemo />
        </AppStateProvider>
    )
    );
