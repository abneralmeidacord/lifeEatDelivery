import React from 'react';
import {
  Text,
  Avatar,
  Box,
  TypeList,
  Icon,
  FoodsList,
  Scroll,
  Screen,
} from '~/components';

export const HomeScreen = () => {
  return (
    <Box w="100%" bg="white">
      <Box
        bbw={1}
        borderColor="primary"
        ph={20}
        pv={24}
        w="100%"
        flexDir="row"
        alingItems="center"
        justifyContent="space-between">
        <Box>
          <Text.ScreenTitle mb={8}>Olá, Abner!</Text.ScreenTitle>
          <Text.RegularText>Seja bem-vindo novamente.</Text.RegularText>
        </Box>
        <Avatar
          source={{
            uri: 'https://images.unsplash.com/photo-1608889453743-bf8eabeb12fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          }}
        />
      </Box>
        <Text.ScreenTitle ml={20} mt={24} mb={16}>
          Cardápio
        </Text.ScreenTitle>
        <TypeList />
      <FoodsList />
    </Box>
  );
};
