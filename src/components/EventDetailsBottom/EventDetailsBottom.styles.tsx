import styled, { keyframes } from 'styled-components';
import { ThemedStyledComponentsModule } from "styled-components";


export const heartBeat = keyframes`
    25% {transform: scale(1.1);}
    75% {transform: scale(0.6);}
 `;

export const hahaFace = keyframes`
    10%, 30%, 50% {transform: translateY(25px);}
    20%, 40% {transform: translateY(15px);}
    60%, 80% {transform: translateY(0);}
    70%, 90% {transform: translateY(-10px);}
 `;

export const hahaMouth = keyframes`
    10%, 30%, 50% {transform: scale(0.6); top: 45%;}
    20%, 40% {transform: scale(0.8); top: 45%;}
    60%, 80% {transform: scale(1); top: 50%;}
    70% {transform: scale(1.2); top: 50%;}
    90% {transform: scale(1.1); top: 50%;}
 `;

export const yay = keyframes`
    25% {transform: rotate(-15deg);}
    75% {transform: rotate(15deg);}
 `;

export const wowFace = keyframes`
    15%, 25% {transform: rotate(20deg) translateX(-25px);}
    45%, 65% {transform: rotate(-20deg) translateX(25px);}
    75%, 100% {transform: rotate(0deg) translateX(0);}
 `;

export const wowBrow = keyframes`
	15%, 65% {top: 25px;}
	75%, 100%, 0% {top: 15px;}
    `;
export const wowMouth = keyframes`
	10%, 30% {width: 20px; height: 20px; left: calc(50% - 10px);}
	50%, 70% {width: 30px; height: 40px; left: calc(50% - 15px);}
	75%, 100% {height: 50px;}
    `;

export const sadFace = keyframes`
    25% {top: -15px;}
    35% {top: -15px;}
    55% {top: 10px;}
    95% {top: 10px;}
    0% {top: 0;}
    100% {top: 0;}
`;

export const sadMouth = keyframes`
    25%  {transform: scale(0.85); top: 70px;}
    35% {transform: scale(0.85); top: 70px;}
    0% {transform: scale(1); top:80px;}
    55%{transform: scale(1); top:80px;}
    100% {transform: scale(1); top:80px;}
`;

export const tearDrop = keyframes`
    0%  {display:block; left: 35px; top: 15px; transform: rotate(45deg) scale(0);}
    100% {display:block; left: 35px; top: 15px; transform: rotate(45deg) scale(0);}
	25% {display:block; left: 35px; transform: rotate(45deg) scale(2);}
	49.9% {display:block; left: 35px; top: 65px; transform: rotate(45deg) scale(0);}
	50% {display:block; left: -35px; top: 15px; transform: rotate(45deg) scale(0);}
	75% {display:block; left: -35px; transform: rotate(45deg) scale(2);}
	99.9% {display:block; left: -35px; top: 65px; transform: rotate(45deg) scale(0);}
`;

export const handsUp = keyframes`
	25% {transform: rotate(15deg);}
	50% {transform: rotate(-15deg) translateY(-10px);}
	75%, 100% {transform: rotate(0deg);}
    `;

export const thumbsUp = keyframes`
	25% {transform: rotate(20deg);}
	50%, 100% {transform: rotate(5deg);}
    `;

export const angryColor = keyframes`
	45%, 60% {background-size: 250%;
	85%, 100%, 0% {background-size: 100%;
        `;

export const angryFace = keyframes`
	35%, 60% {transform: translateX(0) translateY(10px) scale(0.9);
	40%, 50% {transform: translateX(-5px) translateY(10px) scale(0.9);
	45%, 55% {transform: translateX(5px) translateY(10px) scale(0.9);
`;

export const angryMouth = keyframes`
	25%, 50% {height: 6px; bottom: 25px;}
    `;


export const EventIDWrapper = styled.span`
    width: 190px;
    height: 28px;
    position: absolute;
    left: 70px;
    margin-top: 40px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  `
export const HostNameWrapper = styled.span`
    position: absolute;
    width: 190px;
    heigth: 18px;
    display: inline;
    left: 70px;
    margin-top: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  `

export const HostImageWrapper = styled.img`

top: 10px;
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
left: 250px;
display: inline;
position: absolute;
top: 18px;
font-family: 'Roboto', sans-serif;
font-size: 13px;
//font-weight: 500;
//font-stretch: normal;
//font-style: normal;
letter-spacing: normal;
background-color: #001AFF;
opacity: 1;
border-radius: 5px;
width: 57px;
height: 21px;
padding-left: 7px;
padding-right: 30px;
padding-top: 5px;`

export const BottomFollowButtonWrapper = styled.div`
left: 360px;
display: inline;
position: absolute;
width: 57px;
height: 21px;
padding-left: 7px;
padding-right: 30px;
padding-top: 5px;
top: 18px;
font-family: 'Roboto', sans-serif;
font-size: 13px;
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
left: 480px;
top: 7px;
padding-left: 0px;
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
    //srcOverride: ""
    //appearindex: "3"
}))`
position: absolute;
background-image: url(${props => props.srcOverride ? props.srcOverride : `https://nfodorpubnubcdn.imfast.io/images/reaction` + props.reaction + `@3x.png`});


//background-image: url(${props => `https://nfodorpubnubcdn.imfast.io/images/reaction` + props.reaction + `@3x.png`});
background-size: contain;
background-repeat: no-repeat;
top: 7px;
height: 35px;
width: 35px;
left: ${props => (props.appearindex == "1") ? 0 + `px` : (35 * (parseInt(props.appearindex) - 1)) + `px`} ;
padding-right: 30px;
padding-left: 10px;
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
font-size: 15px;
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
 //width: 850px;
 height: 100px;
 left: 0px;
 top: 500px;
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


export const Emoji = styled.div.attrs(props => ({
    emoji_white_color: "white",
    emoji_base_color: "blue",
    emoji_text_color: "black",
    //appearindex:"1" 

}))`
width: 25px;
height: 25px;
left: ${props => (25 * parseInt(props.appearindex)) + "px"} ;

margin: 7px 15px 10px 18px;
background: ${props => props.emoji_base_color};
display: inline-block;
border-radius: 50%;
position: absolute;

&:after {
    position: absolute;
    bottom: -40px;
    font-size: 18px;
    width: 60px;
    left: calc(50% - 30px);
    color:  ${props => props.emoji_text_color};  
}
`;

export const BaseEmoji = styled.div`
    position: absolute;
        
    &:before, &:after {
        position: absolute;
        content: '';
    }  
`;
export const EmojiFace = styled(BaseEmoji)`
    width: inherit;
    height: inherit;
`;
export const emoji__eyebrows = styled(BaseEmoji)``;
export const emoji__eyes = styled(BaseEmoji)``;
export const emoji__mouth = styled(BaseEmoji)``;
export const emoji__tongue = styled(BaseEmoji)``;
export const emoji__heart = styled(BaseEmoji)``;
export const EmojiHand = styled(BaseEmoji).attrs(props => ({
    emoji_white_color: "white",
    emoji_base_color: "red",
    emoji_text_color: "black"

}))`
        top: 11px;
        left: 7px;
		bottom: 10px;
		width: 5px;
		height: 10px; 
		background: ${props => props.emoji_white_color};
		border-radius: 1px;
		z-index: 0;
		animation: ${handsUp} 2s linear infinite;
		
		&:before {
            left: 4.5px;
            bottom: 1px;
            width: 6px;
            background: inherit;
            height: 2px;
            border-radius: 0px 1px 1px 0px;
            border-top-left-radius: 0px;
            border-top-right-radius: 1px;
            border-bottom-right-radius: 1px;
            border-bottom-left-radius: 0px;
            box-shadow: 1px -2.5px 0 0.7px ${props => props.emoji_white_color},
                1.6px -5px 0 0.7px ${props => props.emoji_white_color}, 
                3px -8px 0 0.9px ${props => props.emoji_white_color};  
		} 
  `;



export const EmojiThumb = styled(BaseEmoji).attrs(props => ({
    emoji_white_color: "white",
    emoji_base_color: "red",
    emoji_text_color: "black"

}))`
border-bottom: 1px solid ${props => props.emoji_white_color};
border-left: 5px solid #fffdfd00;
top: -4px;
right: -6px;
height: 8px;
//left: -6px;
z-index: 2;
transform: rotate(5deg);
transform-origin: 0% 100%;
animation: ${thumbsUp} 2s linear infinite;

&:before {
    background: ${props => props.emoji_white_color};
    border-radius: 50% 50% 0 0;
    width: 3.4px;
    height: 4.2px;
    left: -7px;
    top: -1.1px;
    transform: rotate(-15deg);
    transform-origin: 100% 100%;
    box-shadow: -1px 4px 0 1px ${props => props.emoji_white_color};
}
`;





export const EmojiHeart = styled.div.attrs(props => ({
    emoji_white_color: "white"

}))`
left: calc(50% - 40px);
top: calc(50% - 40px);
width: 80px;
height: 80px;
animation: ${heartBeat} 1s linear infinite alternate;

&:before, &:after {
  left: calc(50% - 20px);
  top: calc(50% - 32px);
  width: 40px;
  height: 64px;
  background: ${props => props.emoji_white_color};
  border-radius: 20px 20px 0 0;
}

&:before {
  transform: translate(20px) rotate(-45deg);
  transform-origin: 0 100%;
}

&:after {
  transform: translate(-20px) rotate(45deg);
  transform-origin :100% 100%;
}

`;

export const emojiLove = styled.div.attrs(props => ({
    emoji_love_color: "red"

}))`
background: ${props => props.emoji_love_color};
  
&:after {
    content: 'Love';
}

.emoji__heart {
    left: calc(50% - 40px);
    top: calc(50% - 40px);
    width: 80px;
    height: 80px;
    animation: ${heartBeat} 1s linear infinite alternate;

    &:before, &:after {
        left: calc(50% - 20px);
        top: calc(50% - 32px);
        width: 40px;
        height: 64px;
        background: ${props => props.emoji_love_color};
        border-radius: 20px 20px 0 0;
    }
  
    &:before {
        transform: translate(20px) rotate(-45deg);
        transform-origin: 0 100%;
    }

    &:after {
        transform: translate(-20px) rotate(45deg);
        transform-origin :100% 100%;
    }
}
`;
export const EmojiHaha = styled.div.attrs(props => ({
    emoji_black_color: "black",
    emoji_love_color: "red"
}))`
&:after {
    content: '';
}

.EmojiFace {
    animation-name: ${hahaFace};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
}

.EmojiEyes {
    width: 26px;
    height: 6px;
    border-radius: 2px;
    left: calc(50% - 13px);
    top: 35px;
    transform: rotate(20deg);
    background: transparent;
    box-shadow: -25px 5px 0 0 ${props => props.emoji_black_color},  25px -5px 0 0 ${props => props.emoji_black_color};
  
    &:after {
      left: 0;
      top: 0;
      width: 26px;
      height: 6px;
      border-radius: 2px;
      transform: rotate(-40deg);
      background: transparent;
      box-shadow: -25px -5px 0 0 ${props => props.emoji_black_color},  25px 5px 0 0 ${props => props.emoji_black_color};
    }
}

.EmojiMouth {
    width: 80px;
    height: 40px;
    left: calc(50% - 40px);
    top: 50%;
    background: ${props => props.emoji_black_color};
    border-radius: 0 0 40px 40px;
    overflow: hidden;
    z-index: 1;  
    animation-name: ${hahaMouth};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
}

.EmojiTongue {
    width: 70px;
    height: 30px;
    background: ${props => props.emoji_love_color};
    left: calc(50% - 35px);
    bottom: -10px;
    border-radius: 50%;  
}  
`;

export const EmojiTongue = styled.div.attrs(props => ({
    emoji_white_color: "white",
    emoji_black_color: "black",
    emoji_love_color: "red",
    emoji_like_color: "red",
}))``;

export const EmojiMouth = styled.div.attrs(props => ({
    emoji_white_color: "white",
    emoji_black_color: "black",
    emoji_love_color: "red",
    emoji_like_color: "red",
}))`
width: 60px;
height: 80px;
left: calc(50% - 30px);
top: 80px;
box-sizing: border-box;
border: 6px solid  ${props => props.emoji_black_color};  
border-radius: 50%;
border-bottom-color: transparent;
border-left-color: transparent;
border-right-color: transparent;
background: transparent;
animation-name: ${sadMouth};
animation-duration: 2s;
animation-timing-function: linear;
animation-delay: 0s;
animation-iteration-count: infinite;
animation-direction: normal;
animation-fill-mode: none;
animation-play-state: running;

&:after {
    width: 6px;
    height: 6px;
    background: transparent;
    border-radius: 50%;
    top: 4px;
    left: calc(50% - 3px);
    box-shadow: -18px 0 0 0  ${props => props.emoji_black_color}, 18px 0 0 0  ${props => props.emoji_black_color};  
}  
}
`;

export const EmojiEyes = styled.div.attrs(props => ({
    emoji_white_color: "white",
    emoji_black_color: "black",
    emoji_love_color: "red",
    emoji_like_color: "red",
}))`
width: 26px;
height: 6px;
border-radius: 2px;
left: calc(50% - 13px);
top: 35px;
transform: rotate(20deg);
background: transparent;
box-shadow: -25px 5px 0 0 ${props => props.emoji_black_color},  25px -5px 0 0 ${props => props.emoji_black_color};

&:after {
  left: 0;
  top: 0;
  width: 26px;
  height: 6px;
  border-radius: 2px;
  transform: rotate(-40deg);
  background: transparent;
  box-shadow: -25px -5px 0 0 ${props => props.emoji_black_color},  25px 5px 0 0 ${props => props.emoji_black_color};
}
`;

export const emojiLike = styled.div.attrs(props => ({
    emoji_white_color: "white",
    emoji_black_color: "black",
    emoji_love_color: "red",
    emoji_like_color: "red",
}))`
background: ${props => props.emoji_like_color};
  
	&:after {
		content: 'Like';
	}

	.EmojiHand {
		left: 25px;
		bottom: 30px;
		width: 20px;
		height: 40px; 
		background: ${props => props.emoji_white_color};
		border-radius: 5px;
		z-index: 0;
		animation: hands-up 2s linear infinite;
		
		&:before {
			left: 25px;
			bottom: 5px;
			width: 40px;
			background: inherit;
			height: 10px;
			border-radius: 2px 10px 10px 2px;
			box-shadow: 1px -9px 0 1px ${props => props.emoji_white_color}, 2px -19px 0 2px ${props => props.emoji_white_color}, 3px -29px 0 3px ${props => props.emoji_white_color};  
		}  
	}
  
	.EmojiThumb {
		border-bottom: 0px solid ${props => props.emoji_white_color};
		border-left: 0px solid transparent;
		top: -25px;
		right: -25px;
		z-index: 2;
		transform: rotate(5deg);
		transform-origin: 0% 100%;
        animation-name: ${thumbsUp};
        animation-duration: 8s;
        animation-iteration-count: infinite;

		&:before {
			border-radius: 50% 50% 0 0;
			background: ${props => props.emoji_white_color};
			width: 10px;
			height: 12px;
			left: -10px;
			top: -8px;
			transform: rotate(-15deg);
			transform-origin: 100% 100%;
			box-shadow: -1px 4px 0 -1px ${props => props.emoji_white_color};
		}
	}
`;


