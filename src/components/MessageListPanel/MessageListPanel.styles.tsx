import styled from 'styled-components';

export const MessageListPanelWrapper = styled.div`
display: flex;
flex-grow: 1;
justify-content: space-between;
flex-direction: column;
 //justify-content: flex-start
 //flex-wrap: wrap;
 //justify-content: flex-end;
 //justify-content: start;
 //position: relative;
 
 width: 100vh;
    @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
 z-index: 50;
 
`;


