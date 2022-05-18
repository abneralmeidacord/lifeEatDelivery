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
      ph={24}>
      <Box flex={0.75} w="100%">
        {title && <Text.Title>{title}</Text.Title>}
        {children}
      </Box>
    </Box>
  );
};
