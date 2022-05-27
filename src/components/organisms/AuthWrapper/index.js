import React from 'react';
import { Box, Text } from '~/components';

export const AuthWrapper = ({ children, title, bottomChildren }) => {
  return (
    <Box
      flex={1}
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      pv={48}
      ph={15}>
      <Box w="100%">
        {children}
      </Box>
    </Box>
  );
};
