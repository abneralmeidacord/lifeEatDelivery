import React from 'react';
import { StatusBar } from 'react-native';
import { Scroll } from '../Scroll';
import { Box } from '../Box';
import { Header } from '../Header';

export const ScreenContainer = ({ children, statusBarHidden, ...props }) => {
  return (
    <Box h="100%" w="100%" bg="white" {...props}>
      <StatusBar hidden={statusBarHidden} />
      <Header {...props}/>
      <Box>{children}</Box>
    </Box>
  );
};