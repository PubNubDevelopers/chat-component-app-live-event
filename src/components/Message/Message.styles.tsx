import styled from 'styled-components';

export const MessageWrapper = styled.div`
 //display: flex;
 height: 100px;
 width: 308px;
 flex-shrink: 0;
`;

export const MessageMessageWrapper = styled.span`
top: 20px;
left: 50px;
width: 90px;
//height: 50px;
font-family: 'Roboto', sans-serif;
width: 100%;
position: relative;
// display: -webkit-box;
// display: -webkit-flex;
display: -ms-flexbox;
display: flex;
overflow: hidden;
text-overflow: ellipsis;
overflow-wrap: true
white-space: nowrap;
`;

export const SenderNameWrapper = styled.span`
top: 5px;
font-family: 'Roboto', sans-serif;
//margin-left: 7px;
left: 20px;
width: 50px;
//display: inline;
height: 30px;
width: auto;
//display: flex;
position: relative;
`;

export const AvatarWrapper = styled.img`
top: 20px;
//margin-left: 14px;
left: 7px;
width: 42px;
//display: inline;
height: 30px;
width: auto;
position: relative;
`;