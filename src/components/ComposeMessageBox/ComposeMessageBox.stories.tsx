import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"
import { ComposeMessageBox } from '././ComposeMessageBox';


storiesOf("ComposeMessageBox", module)
    .add("Live Event Chat", () => (
        <ComposeMessageBox>

        </ComposeMessageBox>
    )
    );
