import styled from 'styled-components';

export const CreateEventWrapper = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    //display: block;
    left: 310px;
    width: 40%;
`;

export const EventNameWrapper = styled.div.attrs(props => ({
    // we can define static props

}))`
    border-radius: 9px;
    border-width: 1px;
    color: red;
    top: 151px;
    height: 30px;
    width: 180px;
    padding-left: 35px;
    position: absolute;
    margin: auto;
    `;

export const HostNameWrapper = styled.div.attrs(props => ({
    // we can define static props
}))`
        border-radius: 9px;
        border-width: 1px;
        color: red;
        top: 191px;
        height: 30px;
        width: 180px;
        padding-left: 35px;
        position: absolute;
        margin: auto;
        `;

export const CreateEventButtonWrapper = styled.div.attrs(props => ({
    // we can define static props
}))`
    border-radius: 9px;
    border-width: 1px;
    color: red;
    top: 90px;
    height: 30px;
    width: 180px;
    padding-left: 15px;
    position: absolute;
    margin: auto;
    `;
export const ButtonCreateEvent = styled.button`
border-radius: 20px;
border-width: 0px;
color: #262323;
top: 150px;
height: 55.5px;
width: 180px;
padding-left: 60px;
position: absolute;
margin-left: auto;
margin-right: auto;
background-image: url("https://nfodorpubnubcdn.imfast.io/images/companyLogo.png");
background-repeat: no-repeat;
background-position-x: 10px;
background-position-y: 6px;`;

export const LiveFeedPanelYouTubeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    left                : 0px;
    //position            : absolute;
    top                 : 0px;
    width : 850px;
    height: 490px;
    z-index: 50;
    opacity: 1;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    //object-fit: contain;
    //background: url("images/stream.png") no-repeat;
    background-color: rgba(55, 50, 50, 0.7);
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
