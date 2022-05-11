import React from 'react';
import { Touchable, Text } from '..';

export const Button = ({ floating, children, ...props }) => {
  return (
    <Touchable
      bg="primary"
      h={50}
      w={335}
      br={8}
      alignItems="center"
      justifyContent="center"
      position={floating ? 'absolute' : ''}
      mb={floating ? 24 : ''}
      {...props}>
      <Text.BoldText color="white">{children}</Text.BoldText>
    </Touchable>
  );
};
