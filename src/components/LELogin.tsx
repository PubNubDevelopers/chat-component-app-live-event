import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
type ContainerProps = {
    padding?: string | 0;
    margin?: string | 0;
    name: string;
};

export const Container = styled.div<ContainerProps>`
  padding: ${(props) => ('padding' in props ? props.padding : '0')};
  margin: ${(props) => ('margin' in props ? props.margin : 0)};
`;


export default class LELogin extends Component {
  render() {
    return (
       <div> Login Page </div>
    );
  }
}

    // import React from "react"


// interface IProps {
//     loginActions: any
// }

// interface IState {
//     email: string;
//     password: string;
// }
// export  default class LELogin extends React.Component<IProps, IState> {

//     public state: IState = {
//         email: '',
//         password: ''
//     };
//     public props: IProps = {
//         loginActions: ""
//     }

//     public render() {
//         return (
//             <div id="login-container">
//                 <h1>Login</h1>
//             </div>
//         );
//     }
// }
