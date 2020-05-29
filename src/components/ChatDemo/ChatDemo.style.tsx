import styled from 'styled-components';
export const Box = styled.div`
  width: 1280px;
  height: 800px;
  object-fit: contain;
`;
// const Content = styled.div`
//     background-image: url(${props => props.img});
// `;

export const CenterBlendBox = styled.div`
  width: 694px;
  height: 560px;
  opacity: 1;
  mix-blend-mode: soft-light;
  border-radius: 10px;
  background-color: #000000;
  background-image: url("images/pubnub-live-event-chat---login-wallpaper.png"});
`
export const Wallpaper = styled.img`
    border: 0px solid #000;
    width: 1280px;
    height: 800px;
 
`; 
// background-image: url(${img});
// export const Wallpaper = styled.div`
// border: 1px solid #000;
//   width: 1280px;
//   height: 800px;
//   background-image: url(${img});
// `; 

// Create a Title component that'll render an <h1> tag with some styles
export  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  //color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  padding: 0em;
  background: papayawhip;
`;