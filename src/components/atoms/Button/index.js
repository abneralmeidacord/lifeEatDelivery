import React from 'react';
import { ButtonContainer } from './styles';
import { Title } from '../Text'

export const Button = ({ children, outline, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <Title>
        {String(children).toUpperCase()}
      </Title>
    </ButtonContainer>
  );
};
