import styled from 'styled-components';

export const LiveFeedPanelWrapper = styled.div`
    display: flex;
    left                : 0px;
    position            : absolute;
    top                 : 0px;
    transform           : rotate(0deg);
    width : 76%;
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
