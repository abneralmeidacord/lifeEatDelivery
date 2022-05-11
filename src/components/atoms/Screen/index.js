import React from 'react';
import { StatusBar } from 'react-native';
import { Box } from '../Box';
import { Header } from '../Header';
import { Scroll } from '../Scroll';

export const ScreenContainer = ({
  scroll,
  children,
  statusBarHidden,
  bottomChildren,
  ...props
}) => {
  return (
    <Box h="100%" w="100%" bg="white" {...props}>
      <StatusBar hidden={statusBarHidden} />
      <Header {...props} />
      {scroll ? <Scroll>{children}</Scroll> : <Box>{children}</Box>}
    </Box>
  );
};
