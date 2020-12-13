import styled from 'styled-components';



export const LoginForm = styled.div`
display: flex;
flex-direction: column;
height: 80%;
opacity : 1.0;
position: relative;
margin: auto; 
`;


export const LoginFormDividerOr = styled.div`
    font-family: Helvetica;
    background: #5183F7;
    font-size: 12px;
    //color: #FFFFFF;
    height: 15.5px;
    width: 217px;
    position: relative;
    margin: auto;
    background: url("/images/loginDivider.png")   no-repeat;
`;

export const LoginFormInputUserName = styled.input.attrs({
  placeholder: "  User name"
})
  `

    background: url("/images/iconUsername.png") no-repeat;
    background-color: rgba(34, 34, 34, 0.8);
    font-family: Helvetica;
    color: white;
    font-size: initial;
    padding-left: 40px;
    height: 33.5px;
    border-width: 0px;
    height: 33.5px;
    width: 172px;
    position: relative;
    margin: auto;
    border-radius: 20px;
    background-position: 10% 40%;



`;


export const LoginFormInputEmail = styled.input.attrs({
  placeholder: "  User email"
})
  `
    background: url("/images/iconEmail.png") no-repeat;
    background-color: rgba(34, 34, 34, 0.8);
    font-family: Helvetica;
    color: white;
    font-size: initial;
    padding-left: 40px;
    height: 33.5px;
    border-width: 0px;
    height: 33.5px;
    width: 172px;
    position: relative;
    margin: auto;
    border-radius: 20px;
    background-position: 10% 40%;
`;


export const LoginFormInputPassword = styled.input.attrs({
  placeholder: "  User password"
})
  `
    background: url("/images/iconPassword.png") no-repeat;
    background-color: rgba(34, 34, 34, 0.8);
    font-family: Helvetica;
    color: white;
    font-size: initial;
    padding-left: 40px;
    height: 33.5px;
    width: 172px;
    border-width: 0px;
    height: 33.5px;
    position: relative;
    margin: auto;
    border-radius: 20px;
    background-position: 10% 40%;
`;


export const ButtonLogin = styled.button`
    border-radius: 20px;
    border-width: 0px;
    background-color: #001aff;
    color: #FFFFFF;
    height: 33.5px;
    width: 217px;
    position: relative;
    margin: auto;
    margin-top: 40px;
    //background: url("/images/loginGoogleButton.png")  no-repeat;
`;


export const LoginFormModeratorID = styled.input.attrs({
  placeholder: "Please provide Moderator ID"
})
  `
    //background: url("/images/iconModerator.png") no-repeat;
    background-color: rgba(34, 34, 34, 0.8);
    font-family: Helvetica;
    color: white;
    font-size: initial;
    padding-left: 40px;
    height: 33.5px;
    border-width: 0px;
    height: 33.5px;
    width: 172px;
    position: relative;
    margin: auto;
    border-radius: 20px;
    background-position: 10% 60%;
`;

export const ButtonLoginFacebook = styled.button`
    border-radius: 20px;
    border-width: 0px;
    background: #5183F;
    background-color: #222222;
    height: 33.5px;
    width: 217px;
    position: relative;
    margin: auto;
    background-image: url("/images/loginFBButton.png");
`;

export const ButtonLoginGoogle = styled.button`
    border-radius: 20px;
    border-width: 0px;
    background: #5183F7;
    color: #FFFFFF;
    height: 33.5px;
    width: 217px;
    position: relative;
    margin: auto;
    background: url("/images/loginGoogleButton.png")  no-repeat;
`;

export const LoginWrapper = styled.div`
  opacity: 1;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background: url("/images/wallpaper.png") repeat;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //margin: auto;
  height: 580px;
  width: 100vh;
  //object-fit: contain;
  left                : 0px;
  position            : relative;
  top                 : 0px;
  transform           : rotate(0deg);
`;
