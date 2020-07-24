import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {  useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"

import { PromotionAd} from './PromotionAd';



storiesOf("PromotionAd", module)
    .add("Live Event Chat", () => (
            
        <AppStateProvider>
            <PromotionAd></PromotionAd>
        </AppStateProvider>
    )
    
    );