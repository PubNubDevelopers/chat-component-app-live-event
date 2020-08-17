import React, { useState } from 'react';
import ReactDOM from "react-dom";
import ReactPlayer from 'react-player';
import { 
  LiveFeedPanelReactPlayerWrapper, 
  FormGroup, 
  Label, 
  Input, 
  Message, 
  Button,
  ButtonCreateEvent,
  EventNameWrapper,
  CreateEventWrapper,
  HostNameWrapper,
  CreateEventButtonWrapper
} from './LiveFeedPanelReactPlayer.styles';


const theme = {
  main: "mediumseagreen"
};


interface LiveFeedPanelReactPlayerProps {
  // opts:any ,
  // onReady: any
  url: string,
}

export const LiveFeedPanelReactPlayer: React.SFC<LiveFeedPanelReactPlayerProps> = (props: LiveFeedPanelReactPlayerProps) => {
  const [displayName, setDisplayName] = useState('Event-00000-00000')
  const [roomName, setRoomName] = useState('Event-Location-00000-00001')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState({})
  const [onCall, setOnCall] = useState(false)
  return(
    <LiveFeedPanelReactPlayerWrapper>
      <ReactPlayer
        url={props.url}
        width="100%"
        display="flex"
        align-items= "center"
        justify-content= "center"
        flex-direction="row"
        //height="0px"
        // height={props.height}
        controls
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          },

        }}
      />
    </LiveFeedPanelReactPlayerWrapper>

)}

const EventNameInput = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
      <input
          type="text"
          value={inputValue}
          placeholder="Event name"
          onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
          ): void => setInputValue(ev.target.value)}
      />
  );
};

const HostNameInput = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
      <input
          type="text"
          value={inputValue}
          placeholder="Your host name"
          onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
          ): void => setInputValue(ev.target.value)}
      />
  );
};
function CreateEventButton() {
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
  const inputEl = React.useRef<HTMLInputElement>(null);
  const onButtonClick = () => {

    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <>

      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}


