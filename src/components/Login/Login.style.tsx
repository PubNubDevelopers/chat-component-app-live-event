import styled from 'styled-components';



export const Filter = styled.div`
  background-color    : rgba(0,0,0,1.0);
  border-radius       : 10.0px;
  height              : 560px;
  position            : absolute;
  transform           : rotate(0deg);
  width               : 694px;
`

export const Box = styled.div`
  width: 1280px;
  height: 800px;
  object-fit: contain;
`;


export const Wallpaper = styled.div`
  opacity: 10;
  mix-blend-mode: soft-light;
  border-radius: 10px;
  width: auto;
  height: auto;
  text-align: center;
  display: grid;
`

// Create a Title component that'll render an <h1> tag with some styles
export  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  //color: palevioletred;
`;

export const Advert = styled.div`


`
// Create a Wrapper component that'll render a <section> tag with some styles
export const PubNubDesigner = styled.div`
opacity: 1;
//filter: alpha(opacity=40); 
//position: absolute;
//padding: 1em;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  //background-size: 100% 100%;
  //text-align: center;
  //margin-top: 150px;
  //1280px
  background: url("images/wallpaper.png") repeat;
  z-index: 1;
  display: grid;
  margin: auto; 
  height: 800px;
  width: 1280px;
  object-fit: contain;
  left                : 0px;
  position            : absolute;
  top                 : 0px;
  transform           : rotate(0deg);

`;

export const ButtonLoginFacebook = styled.button`
    border-radius: 20px;
    border-width: 0px;
    color: #FFFFFF;
    height: 33.5px;
    width: 217px;
    position: relative;
    margin: auto;
    background: url("images/loginFBButton.png") no-repeat;
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
    background: url("images/loginGoogleButton.png")  no-repeat;
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
    //background: url("images/loginGoogleButton.png")  no-repeat;
`;


export const LoginFormInputUserName= styled.input.attrs({ placeholder: "  User name" })`

    background: url("images/iconUsername.png") no-repeat;
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

export const LoginFormInputEmail= styled.input.attrs({ placeholder: "  User email" })`
    background: url("images/iconEmail.png") no-repeat;
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

export const LoginFormInputPassword= styled.input.attrs({ placeholder: "  User password" })`
    background: url("images/iconPassword.png") no-repeat;
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

export const LoginFormCheckIsModerator= styled.input.attrs({ type: 'checkbox' })`
  background-color: rgba(34, 34, 34, 0.8);
  border-radius: 20px;
  width: 52.5px;
  height: 18.5px;
  margin-top: 40px;
  margin-left: 40px;
  font-family: ProximaNova;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  background-position: 10% 60%;
`;

export const LoginFormModeratorID= styled.input.attrs({ placeholder: "Please provide Moderator ID" })`
    //background: url("images/iconModerator.png") no-repeat;
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



export const LoginFormDividerOr= styled.div`
    font-family: Helvetica;
    background: #5183F7;
    font-size: 12px;
    //color: #FFFFFF;
    height: 15.5px;
    width: 217px;
    position: relative;
    margin: auto;
    background: url("images/loginDivider.png")   no-repeat;
`;


export const LoginForm = styled.div`
display: grid;
height: 80%;
opacity : 1.0;
position: relative;
margin: auto; 
width: 295px;
margin-right: auto;
margin-left: 334px;
margin-top: 55px;
`;


export const CenterLoginBox = styled.div`
width: 694px;
height: 560px;
border-radius: 10px;
//mix-blend-mode: soft-light;
margin-left: auto;
margin-right: auto;
margin-bottom: auto;//
margin-top: 100px;
background-color    : rgba(0,0,0,0.7);
position            : relative;
transform           : rotate(0deg);
`; 

export const Grid =styled.div`
display: grid;
margin: 0;
`;

export const Row = styled.div`
    display: grid;
    color: #000000;
    heigth: 80vh;
    margin: 0;

`;

export const Col = styled.div`
    color: #000000;
    display: grid;
    //width: 500px;
    //dislay: inline-block:
    flex: ${(props)=> props.size}
    //  margin: auto;
    margin: 0;
    `;

    // const Content = styled.div`
//     background-image: url(${props => props.img});
// `;
// const PropsBox = styled.div`
//     background: ${(props) => (props.background ? props.background : "")};
//     height: '50px';
//     width: '50px';
//   `