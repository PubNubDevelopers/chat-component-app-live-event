import styled from 'styled-components';

export const ComposeMessageBoxWrapper = styled.div`
 //display: flex;
 background-color: black;
 width: 200px;
 height: 90px;
 margin-left: 0px;
 left: 0px;
 top: 500px;
 position: absolute;
`;

export const TextInputWrapper = styled.div.attrs({
   placeholder: "Type your message here...",
   //value: 'Submit'

})`;

text-align: center;
padding-left: 50px;
margin-right: 50px;
top: 12px;
width: 120px;
position: absolute;
left: 10px;
border-width: 0px;
border-radius: 230px;
background-color: rgba(255, 255, 255, 0.1);
color: white;
`;


export const UserImgWrapper = styled.img`
margin-top: 9px;
margin-left: 10px;
top: 0px;
height: 40px;
width: 40px;
//background-color: crimson;
position: absolute;
`;

export const EmojiInputWrapper = styled.img`
margin-top: 14px;
margin-left: 0px;
left: 265px;
top: 2px;
height: 35px;
width: 35px;
//background-color: #bbbbbb;
position: absolute;
`;