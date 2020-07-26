import React, { useState } from 'react';
import ReactDOM from "react-dom";
import YouTube from 'react-youtube';
import { 
  LiveFeedPanelYouTubeWrapper, 
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
} from './LiveFeedPanelYouTube.styles';


const theme = {
  main: "mediumseagreen"
};


interface LiveFeedPanelYouTubeProps {
  opts:any ,
  onReady: any
  videoID: any
}

export const LiveFeedPanelYouTube: React.SFC<LiveFeedPanelYouTubeProps> = (props: LiveFeedPanelYouTubeProps) => {
  const [displayName, setDisplayName] = useState('Event-00000-00000')
  const [roomName, setRoomName] = useState('Event-Location-00000-00001')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState({})
  const [onCall, setOnCall] = useState(false)
  return(
    <LiveFeedPanelYouTubeWrapper>
    <YouTube videoId={props.videoID} opts={props.opts} onReady={props.onReady} />
    </LiveFeedPanelYouTubeWrapper>

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
    // strict null checks need us to check if inputEl and current exist.
    // but once current exists, it is of type HTMLInputElement, thus it
    // has the method focus! ✅
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <>
      {/* in addition, inputEl only can be used with input elements. Yay! */}
      {/* <input ref={inputEl} type="text" /> */}
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
// const CreateEventButton = (): JSX.Element => {
//   const [inputValue, setInputValue] = useState<string>("");
//   return (
//       <submit
//           type="text"
//           value={inputValue}
//           placeholder="Your host name"
//           onChange={(
//               ev: React.ChangeEvent<HTMLInputElement>,
//           ): void => setInputValue(ev.target.value)}
//       />
//   );
// };

