import styled from 'styled-components';

export const ComposeMessageBoxWrapper = styled.div`
 display: flex;
 //flex-grow: 1;
 //flex: 0;
 background-color: black;
 width: 200px;
 height: 65px;
 margin-left: 0px;
 margin-bottom: 20px;
 left: 0px;
 //top: 500px;
 //position: absolute;
`;


export const MessageInputWrapper = styled.input.attrs({
   placeholder: "Type your message here...",
})`
   text-align: left;
   font-size: larger;
   backgroundColor: white;
   top: 28px;
   height: 30px;
   flex: 1;
   display: flex;
   padding-left: 10px;
   margin-right: 10px;
   left: 10px;
   border-width: 0px;
   border-radius: 30px;
   background-color: rgba(255, 255, 255, 0.1);
   color: white;
   margin-top: 15px;
`;
export const UserImgWrapper = styled.img`
margin-top: 9px;
//margin-left: 10px;
//top: 0px;
height: 40px;
width: 40px;
//background-color: crimson;
//position: absolute;
`;

export const EmojiInputWrapper = styled.img`
margin-top: 14px;
//margin-left: 150px;
left: 265px;
//top: 2px;
height: 35px;
//width: 35px;
//background-color: #bbbbbb;
//position: absolute;
`;