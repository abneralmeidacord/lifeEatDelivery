import React from 'react';
import { Text, TypeList, FoodsList, ScreenContainer, Box } from '~/components';

export const HomeScreen = () => {
  return (
    <ScreenContainer
      withAvatar
      subtitle="Seja bem-vindo novamente."
      title="Olá, Abner!">
      <Text.ScreenTitle ml={20} mt={24} mb={16}>
        Cardápio
      </Text.ScreenTitle>
      <TypeList />
      <Box pb={350}>
        <FoodsList Counter/>
      </Box>
    </ScreenContainer>
  );
};
