import React from 'react';
import { Text, Avatar, Box } from '~/components';

export const HomeScreen = () => {
  return (
    <Box
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
          <Text.Title pb={8}> Olá, Abner!</Text.Title>
          <Text.RegularText>Seja bem-vindo novamente.</Text.RegularText>
        </Box>
        <Box
          mb={24}
          display="flex"
          w="30%"
          flexDir="column"
          alingItems="flex-end"
          justifyContent="flex-end">
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1608889453743-bf8eabeb12fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
