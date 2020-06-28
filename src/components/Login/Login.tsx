import React, { useCallback, FunctionComponent, useEffect, useState } from 'react';
//import { createPubNubListener } from 'pubnub-redux';
//import { createAppStore } from "../../store";
import ReactDOM from 'react-dom';
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
  LoginWrapper, 
  CenterLoginBox
} from "./Login.style"

import PromotionAd from "../PromotionAd";


interface LoginInitProps {

}


const Login: React.SFC<LoginInitProps> = (props: LoginInitProps) => {

return(

  <LoginWrapper >

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

  </LoginWrapper>

);



  const [input, setInput] = useState('');

  const [error, setError] = useState<string | null>(null);

}

export { Login };

