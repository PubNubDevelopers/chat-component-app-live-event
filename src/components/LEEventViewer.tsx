import styled from 'styled-components';
import React, {Component, useState, useEffect} from 'react';




type ContainerProps = {
    padding?: string | 0;
    margin?: string | 0;
    name: string;
};

export const Container = styled.div<ContainerProps>`
  padding: ${props => ('padding' in props ? props.padding : '0')};
  margin: ${props => ('margin' in props ? props.margin : 0)};
`;


export default class LEEventViewer extends Component {
  render() {
    return (
       <div>Opaa, let's go!!!</div>
    );
  }
}
