import React, { useCallback, FunctionComponent, useEffect, useState } from 'react';


import { StyledCheckBox } from "../StyledCheckBox/StyledCheckBox";

import { PromotionAd } from "../PromotionAd/PromotionAd";

import {
  ButtonLogin,
  LoginFormModeratorID,
  LoginFormInputUserName,
  LoginFormInputPassword,
  LoginFormInputEmail,
  LoginFormDividerOr,
  ButtonLoginGoogle,
  ButtonLoginFacebook,
  LoginForm,
  LoginWrapper,
  CenterLoginBox
} from "./Login.style";
interface LoginInitProps {

}

export const Login: React.SFC<LoginInitProps> = (props: LoginInitProps) => {

return(

  <LoginWrapper >

  <CenterLoginBox>

        <PromotionAd/>

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


