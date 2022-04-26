import React from 'react';
import { ButtonContainer } from './styles';
import { Text } from '../Text'

export const Button = ({ children, outline, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <Text>
        {String(children).toUpperCase()}
      </Text>
    </ButtonContainer>
  );
};
