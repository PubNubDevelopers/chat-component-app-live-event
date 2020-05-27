import React, { useCallback, useEffect, useState } from 'react';
import { createPubNubListener } from "pubnub-redux";
import { createAppStore } from "../store";
import PubNub from 'pubnub';
import { createTypingIndicatorsListener } from "../features/typingIndicator/typingIndicatorModel";
import ReactDOM from 'react-dom';
import LEChatRoom from '../components/LEChatRoom';
import LEEventViewer from '../components/LEEventViewer';
import LEMessage from '../components/LEMessage';
import LELogin from '../components/LELogin';

interface ChatInitProps {
    skin: string,
    store: any,
    client: any,
   }

const ChatDemo: React.SFC<ChatInitProps> = (props) => {


const channels = ['awesomeChannel'];


    //return (<div>Test</div>);

    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{
              width: '500px',
              height: '300px',
              border: '1px solid black',
            }}
          >
            <div style={{ backgroundColor: 'grey' }}>React Chat Example</div>
            <div
              style={{
                backgroundColor: 'white',
                height: '260px',
                overflow: 'scroll',
              }}
            >
              {/* {messages.map((message, messageIndex) => {
                return (
                  <div
                    key={`message-${messageIndex}`}
                    style={{
                      display: 'inline-block',
                      float: 'left',
                      backgroundColor: '#eee',
                      color: 'black',
                      borderRadius: '20px',
                      margin: '5px',
                      padding: '8px 15px',
                    }}
                  >
                    {message}
                  </div>
                );
              })} */}
            </div>
            <div
              style={{
                display: 'flex',
                height: '40px',
                backgroundColor: 'lightgrey',
              }}
            >
              {/* <input
                type="text"
                style={{
                  borderRadius: '5px',
                  flexGrow: 1,
                  fontSize: '18px',
                }}
                placeholder="Type your message"
                value={input}
                //onChange={e => setInput(e.target.value)}
              /> */}
              <button
                style={{
                  backgroundColor: 'blue',
                  color: 'white',
                  borderRadius: '5px',
                  fontSize: '16px',
                }}
                onClick={e => {
                  e.preventDefault();
                  //sendMessage(input);
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </header>
      </div>
    );
}

export { ChatDemo };
