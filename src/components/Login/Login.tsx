import React, { useCallback, FunctionComponent, useEffect, useState } from 'react';
//import { createPubNubListener } from 'pubnub-redux';
//import { createAppStore } from "../../store";
import PubNub from 'pubnub';
import { createTypingIndicatorsListener } from "../../features/typingIndicator/typingIndicatorModel";
import ReactDOM from 'react-dom';
import { PubNubProvider, usePubNub } from 'pubnub-react';
import styled from 'styled-components';
import {StyledCheckBox} from "../StyledCheckBox/StyledCheckBox";
import {
  LoginFormCheckIsModerator, 
  LoginFormModeratorID, 
  ButtonLogin, 
  LoginFormInputUserName, 
  LoginFormInputPassword,
  LoginFormInputEmail, 
  LoginFormDividerOr, 
  ButtonLoginGoogle, 
  ButtonLoginFacebook, 
  LoginForm, 
  PubNubDesigner, 
  CenterLoginBox
} from "./Login.style"
//const imageSrc = require('/images/loginwallpaper-wallpaper.png')
// import LEChatRoom from '../components/LEChatRoom';
// import LEEventViewer from '../components/LEEventViewer';
// import LEMessage from '../components/LEMessage';
// import LELogin from '../components/LELogin';
import PromotionAd from "../PromotionAd";


interface LoginInitProps {
 simulate: true
}


const Login: React.SFC<LoginInitProps> = (props: LoginInitProps) => {

return(

  <PubNubDesigner >

  <CenterLoginBox>

        <PromotionAd>

        </PromotionAd>

      <LoginForm>

            <ButtonLoginFacebook></ButtonLoginFacebook>
          
            <ButtonLoginGoogle></ButtonLoginGoogle>
         
        <LoginFormDividerOr></LoginFormDividerOr>
          
            <LoginFormInputUserName></LoginFormInputUserName>
            
            <LoginFormInputEmail></LoginFormInputEmail>
            
            <LoginFormInputPassword></LoginFormInputPassword>
            
            <StyledCheckBox text="I am a Moderator" setChange="(event)=>{console.log('aaa')}"></StyledCheckBox>
            
            <LoginFormModeratorID></LoginFormModeratorID>
            
            <ButtonLogin>Sign In</ButtonLogin>

      </LoginForm>

    </CenterLoginBox>

  </PubNubDesigner>

);



  const channels = ['awesomeChannel'];
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => console.log(messages), [messages]);
  useEffect(() => console.log(props), [props]);
  const [time, setTime] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  //useEffect(() => console.log(props.store.dispatch), [props.store.dispatch]);
  const leaveApplication = () => {
    // This is required to show the current user leave immediately rather than
    // wating for the timeout period
    //useEffect(() => console.log(props), [props]);

    //props.client.unsubscribeAll();
  };

 

  useEffect(() => {
    // Start listening for messages and events from PubNub
    //props.client.addListener(createPubNubListener(props.store.dispatch));
    //props.client.addListener(createTypingIndicatorsListener(props.store.dispatch));
    return ;//leaveApplication();
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => { leaveApplication() });
  }, []);


  useEffect(() => {

    // props.client.getMessage('channel1', (msg) => {
    //     console.log(msg);
    // });

    // props.client.addListener({
    //   message: (message) => {

    //     setMessages(function (messages) {
    //       return [...messages, message]
    //     });
    //   },
    // });

    // props.client.subscribe({ channels });

    return leaveApplication;
  }, []);

  // const sendMessage = useCallback(

  //   async message => {
  //     await props.client.publish({
  //       channel: channels[0],
  //       message,
  //     });

  //     setInput('');
  //   },


  //   [props.client, setInput]
  // );


}



export { Login };

