import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
left                : 0px;
position            : absolute;
top                 : 0px;
transform           : rotate(0deg);
width : 273px;
height: 560px;
z-index: 50;
opacity: 0.7;
//mix-blend-mode: soft-light;

-webkit-background-size: contain;
-moz-background-size: contain;
-o-background-size: contain;
background-size: contain;
object-fit: contain;
background: url("images/promotionAd.png") no-repeat;
background-color: rgba(255, 255, 255, 0.5);

`;

export const Container = styled.div`
  background: white;
`;