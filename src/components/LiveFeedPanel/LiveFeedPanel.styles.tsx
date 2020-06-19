import styled from 'styled-components';

export const LiveFeedPanelWrapper = styled.div`
    display: flex;
    left                : 0px;
    position            : absolute;
    top                 : 0px;
    width : 850px;
    height: 80%;
    z-index: 50;
    opacity: 1;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    object-fit: contain;
    //background: url("images/stream.png") no-repeat;
    background-color: rgba(255, 255, 255, 0.7);
    background-blend-mode: hard-light;
`;

export const FormGroup = styled.div`
    display: flex;
    left: 33%;
    top: 33%;
    position: absolute;
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: ;
    display: block;
`;

export const Button = styled.input`
	padding: 0.5em;
	color: blue;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;
