import React from 'react';
import { Touchable, Text } from '..';

export const Button = ({ outline, floating, children, ...props }) => {
  return (
    <Touchable
      bg={outline ? 'white' : 'primary'}
      h={50}
      w={335}
      br={8}
      bw={1}
      borderColor="primary"
      alignItems="center"
      justifyContent="center"
      position={floating ? 'absolute' : ''}
      mb={floating ? 24 : ''}
      {...props}>
      <Text.BoldText color={outline ? 'primary' : 'white'}>
        {children}
      </Text.BoldText>
    </Touchable>
  );
};
