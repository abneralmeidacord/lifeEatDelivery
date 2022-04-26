import React from 'react';
import { StatusBar } from 'react-native';
import { Box } from '../Box';
import { Text } from '../Text';
import { Scroll } from '../Scroll';

export const Screen = () => {
  return (
    <Scroll h="100%" w={375} bg="transparent">
      <Box w="100%" mt={32} />
    </Scroll>
  );
};
