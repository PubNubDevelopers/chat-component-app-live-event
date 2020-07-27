import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { UserMessage, useAppState, AppStateProvider, AppStateContext } from "../../AppStateContext"

import { Message } from '../Message/Message';

const message_sample = new UserMessage(`{
    "id": 1,
    "internalKey": "5fa1452e-bae1-4eb2-aca7-b412b1c38b05",
    "key": "96602934-5fce-4b90-99a2-44e13a009d4c",
    "senderId": "bac6e672-0d2b-4b38-adb9-8cba0bdeaf9e",
    "message": "Self-enabling needs-based matrices",
    "UserAvatar": "https://robohash.org/voluptasetitaque.png?size=50x50&set=set1",
    "timetoken": "1592479002",
    "senderName": "gwhitter5",
    "dateFormat": null,
    "reactions": null,
    "addMessageReaction": null,
    "addActions": null
}`);
storiesOf("Message", module)
    .add("Live Event Chat", () => (
        <Message message={message_sample} />
    )
    
).add("Team Chat", () => (
    <Message message={message_sample} />
)).add("Support Chat", () => (
    <Message message={message_sample} />
))