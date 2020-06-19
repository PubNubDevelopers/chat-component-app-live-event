import styled from 'styled-components';

export const EventIDWrapper = styled.span`
    width: 330px;
    height: 28px;
    position: absolute;
    left: 70px;
    margin-top: 40px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  `
export const HostNameWrapper = styled.span`
    position: absolute;
    width: 360px;
    heigth: 18px;
    display: inline;
    left: 70px;
    margin-top: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  `

export const HostImageWrapper = styled.img`

top: 18px;
margin-left: 7px;
left: 0px;
width: 50px;
//display: inline;
heigth: 50px;
position: absolute;`

export const BottomButtonImgWrapper = styled.img`
width: 15px;
height: auto;
margin-top: 7px;
margin-left: 7px;
top: 0px;
position: absolute;`

export const BottomButtonTextWrapper = styled.span`
margin-top: 7px;
margin-left: 35px;
top: 0px;
position: absolute;
`

export const BottomShareButtonWrapper = styled.div`
left: 410px;
display: inline;
position: absolute;
top: 18px;
font-family: 'Roboto', sans-serif;
font-size: 15px;
//font-weight: 500;
//font-stretch: normal;
//font-style: normal;
letter-spacing: normal;
background-color: #001AFF;
opacity: 1;
border-radius: 5px;
width: 60px;
height: 25px;
padding-left: 7px;
padding-right: 30px;
padding-top: 5px;`

export const BottomFollowButtonWrapper = styled.div`
left: 540px;
display: inline;
position: absolute;
width: 60px;
height: 25px;
padding-left: 7px;
padding-right: 30px;
padding-top: 5px;
top: 18px;
font-family: 'Roboto', sans-serif;
font-size: 15px;
letter-spacing: normal;
opacity: 1;
border-radius: 5px;
background-color: #001AFF;
`

export const EventDetailWrapper = styled.div`
pointer-events: none;
`
export const ReactionsWrapper = styled.div`
height: 30px;
width: 100px;
left: 640px;
top: 15px;
padding-left: 10px;
padding-right: 10px;
font-family: Roboto;
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
position: absolute;
opacity: 0.7;
border-radius: 7px;
background-color: #000000;
`


export const ReactionButtonWrapper = styled.div.attrs(props => ({
    //reaction: "LOL",
    //appearindex: "3"
  }))`
position: absolute;
background-image: url(${props => `/images/reaction` + props.reaction + `@3x.png`});
background-size: contain;
background-repeat: no-repeat;
top: 7px;
height: 25px;
width: 25px;
left: ${props => (30 * parseInt(props.appearindex)) + "px"  } ;
padding-right: 20px;
padding-left: 0px;
font-family: Roboto;
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
margin-left: 5px;
border-radius: 7px;
background-color: #000000;
`

export const TitleWrapper = styled.div`
height: 30px;
padding-left: 10px;
padding-right: 10px;
font-family: Roboto;
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
margin-left: 40px;
//opacity: 0.7;
border-radius: 7px;
background-color: #000000;
`
export const EventDetailsTopWrapper = styled.div`
 display: flex;
 position: absolute;
 width: 640px;
 height: 120px;
 left: 20px;
 top: 30px;
 z-index: 150;
 opacity: 1;
 -webkit-background-size: contain;
 -moz-background-size: contain;
 -o-background-size: contain;
 background-size: contain;
 object-fit: contain;
 //background: url("images/stream.png") no-repeat;
 background-color: rgba(0, 0, 0, 0);
 background-blend-mode: hard-light;
 font-family: Roboto;
 font-size: 9px;
 font-weight: 500;
 font-stretch: normal;
 font-style: normal;
 line-height: normal;
 letter-spacing: normal;
 color: #ffffff;
`;

export const EventDetailsBottomWrapper = styled.div`
 display: flex;
 position: absolute;
 width: 1000px;
 height: 100px;
 left: 0px;
 top: 660px;
 z-index: 150;
 opacity: 1;
 -webkit-background-size: contain;
 -moz-background-size: contain;
 -o-background-size: contain;
 background-size: contain;
 //object-fit: contain;
 //background: url("images/stream.png") no-repeat;
 background-color: rgba(0, 0, 0, 0);
 background-blend-mode: hard-light;
 font-family: Roboto;
 font-size: 9px;
 font-weight: 500;
 font-stretch: normal;
 font-style: normal;
 line-height: normal;
 letter-spacing: normal;
 color: #ffffff;
`;
