import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PubNub from 'pubnub';
import keyConfiguration from "../config/pubnub-keys.json";
import { Provider } from "react-redux";
import { createAppStore } from "./store";

import { ThemeProvider } from "styled-components";
import { createPubNubListener } from "pubnub-redux";
import LEChatRoom from './components/LEChatRoom';
import LEEventViewer from './components/LEEventViewer';
import LEMessage from './components/LEMessage';
import LELogin from './components/LELogin';
import { PubNubProvider, usePubNub } from 'pubnub-react';
import { createTypingIndicatorsListener } from "./features/typingIndicator/typingIndicatorModel";

import './App.css';
 
const pubnub = new PubNub({
  publishKey: 'demo',
  subscribeKey: 'demo',
});

const store = createAppStore({
  pubnub: {
    api: pubnub
  }
});
 
const channels = ['awesomeChannel'];
 
// const Chat = () => {
//   const pubnub = usePubNub();
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
 
//   useEffect(() => {
//     pubnub.addListener({
//       message: messageEvent => {
//         setMessages([...messages, messageEvent.message]);
//       },
//     });
 
//     pubnub.subscribe({ channels });
//   }, [messages]);
 
//   const sendMessage = useCallback(
//     async message => {
//       await pubnub.publish({
//         channel: channels[0],
//         message,
//       });
 
//       setInput('');
//     },
//     [pubnub, setInput]
//   );
 
  
// };
 


interface AppProps {
  name: string;
}

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
  
};


export const Container = styled.div<ContainerProps>`
padding: ${props => ('padding' in props ? props.padding : '0')};
margin: ${props => ('margin' in props ? props.margin : 0)};
`;


const pubnubConfig = Object.assign(
  {},
  {
    // Ensure that subscriptions will be retained if the network connection is lost
    restore: true,
    heartbeatInterval: 0
  },
  keyConfiguration
);


//class Chat extends React.Component {
//export  function Chat() {  
 export const Chat = () => {  


 const pubnub = usePubNub();
 const [messages, setMessages] = useState([]);
 
 const [input, setInput] = useState('');
 

 const leaveApplication = () => {
  // This is required to show the current user leave immediately rather than
  // wating for the timeout period
  pubnub.unsubscribeAll();
};

 useEffect(() => {
  // Start listening for messages and events from PubNub
  pubnub.addListener(createPubNubListener(store.dispatch));
  pubnub.addListener(createTypingIndicatorsListener(store.dispatch));
  return leaveApplication;
}, []);

useEffect(() => {
  window.addEventListener("beforeunload", leaveApplication);
}, []);
 
 // useEffect(() => {
  //   pubnub.addListener({
  //     message: messageEvent => {
  //       setMessages([...messages, messageEvent.message]);
  //     },
  //   });
 
  //   pubnub.subscribe({ channels });
  // }, [messages]);
 
  // const sendMessage = useCallback(
  //   async message => {
  //     await pubnub.publish({
  //       channel: channels[0],
  //       message,
  //     });
 
  //     setInput('');
  //   },
  //   [pubnub, setInput]
  // );

    return (<div>Test</div>);

  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <div
  //           style={{
  //             width: '500px',
  //             height: '300px',
  //             border: '1px solid black',
  //           }}
  //         >
  //           <div style={{ backgroundColor: 'grey' }}>React Chat Example</div>
  //           <div
  //             style={{
  //               backgroundColor: 'white',
  //               height: '260px',
  //               overflow: 'scroll',
  //             }}
  //           >
  //             {/* {messages.map((message, messageIndex) => {
  //               return (
  //                 <div
  //                   key={`message-${messageIndex}`}
  //                   style={{
  //                     display: 'inline-block',
  //                     float: 'left',
  //                     backgroundColor: '#eee',
  //                     color: 'black',
  //                     borderRadius: '20px',
  //                     margin: '5px',
  //                     padding: '8px 15px',
  //                   }}
  //                 >
  //                   {message}
  //                 </div>
  //               );
  //             })} */}
  //           </div>
  //           <div
  //             style={{
  //               display: 'flex',
  //               height: '40px',
  //               backgroundColor: 'lightgrey',
  //             }}
  //           >
  //             <input
  //               type="text"
  //               style={{
  //                 borderRadius: '5px',
  //                 flexGrow: 1,
  //                 fontSize: '18px',
  //               }}
  //               placeholder="Type your message"
  //               value={input}
  //               //onChange={e => setInput(e.target.value)}
  //             />
  //             <button
  //               style={{
  //                 backgroundColor: 'blue',
  //                 color: 'white',
  //                 borderRadius: '5px',
  //                 fontSize: '16px',
  //               }}
  //               onClick={e => {
  //                 e.preventDefault();
  //                 //sendMessage(input);
  //               }}
  //             >
  //               Send Message
  //             </button>
  //           </div>
  //         </div>
  //       </header>
  //     </div>
  //   );
}

const leaveApplication = () => {
  // This is required to show the current user leave immediately rather than
  // wating for the timeout period
  pubnub.unsubscribeAll();
};


const App = () => {
  useEffect(() => {
    // Start listening for messages and events from PubNub
     pubnub.addListener(createPubNubListener(store.dispatch));
    pubnub.addListener(createTypingIndicatorsListener(store.dispatch));
    return leaveApplication;
  }, []);

  useEffect(() => {

   window.addEventListener("beforeunload", leaveApplication);
  }, []);
  return (<div>Test</div>);
  //return (


    // <ThemeProvider theme={appTheme}>
    //   <Provider store={store}>
    //     <PubNubProvider client={pubnub}>
    //       <Normalize />
    //       <GlobalStyles />
    //       <ApplicationRouter />
    //     </PubNubProvider>
    //   </Provider>
    // </ThemeProvider>
  //);
};

// export default function App({name}: AppProps) {
//       return <Container padding="1em">

// <LEMessage></LEMessage>

// <PubNubProvider client={pubnub}>
//       <Chat />
//     </PubNubProvider>

//       </Container>;
// }
export default App ;

