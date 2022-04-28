import React from 'react';
import { Text, Box } from '~/components';

export const HistoryScreen = () => {

return (
    <Box
      display="flex"
      borderColor="primary"
      mt={36}
      mr={48}
      w="100%"
      flexDir="column"
      alignItems="flex-start">
      <Box
        bbw={1}
        borderColor="primary"
        display="flex"
        ph={24}
        w="100%"
        flexDir="row"
        alingItems="center"
        justifyContent="space-between">
        <Box
          display="flex"
          W="70%"
          flexDir="column"
          alingItems="flex-start"
          justifyContent="flex-start">
          <Text.Title mb={16}>Meus Pedidos</Text.Title>
        </Box>
      </Box>
    </Box>
  );
};