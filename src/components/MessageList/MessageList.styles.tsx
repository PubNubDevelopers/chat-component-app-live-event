import styled from 'styled-components';

export const MessageListWrapper = styled.div`
 display: flex;
 flex: 1 1 auto;
 //flex-wrap: wrap;
 flex-direction: column;
 color: white;
 overflow-y: scroll;
 list-style: none;
 width: 100%;
 height: 100px;
   @media (max-width: 768px) {
    width: 100vh;
  }
`;
