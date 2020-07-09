import styled from 'styled-components';

export const ComposeMessageBoxWrapper = styled.div`
 //display: flex;
 background-color: black;
 width: 200px;
    height: 60px;
 margin-left: 0px;
 left: 0px;
    top: 658px;
 position: absolute;
`;

export const TextInputWrapper = styled.input.attrs({ 
   type: 'text',
   placeholder: "Type your message here...",
      //value: 'Submit'

 })`
margin-top: 9px;
margin-left: 0px;
padding-left: 20px;
padding-right: 60px;
left: 55px;
top: 0px;
height: 47px;
width: 260px;
border-width: 0px;
border-radius: 230px;
background-color: rgba(255, 255, 255, 0.1);
color: white;
position: absolute;`


export const UserImgWrapper = styled.img `
margin-top: 14px;
margin-left: 10px;
top: 0px;
height: 40px;
width: 40px;
//background-color: crimson;
position: absolute;`

export const EmojiInputWrapper = styled.img `
margin-top: 14px;
margin-left: 0px;
left: 265px;
top: 2px;
height: 35px;
width: 35px;
//background-color: #bbbbbb;
position: absolute;
`