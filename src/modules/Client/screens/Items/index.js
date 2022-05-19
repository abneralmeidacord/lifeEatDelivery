import React from 'react';
import { FoodsList, ScreenContainer, Box, Button, Scroll } from '~/components';

export const ItemsScreen = () => {
  return (
    <ScreenContainer withBack borderColor="gray" title="Itens escolhidos">
      <Scroll>
        <Box alignItems="center" pb={100} mt={24}>
          <FoodsList />
          <Button>Salvar</Button>
        </Box>
      </Scroll>
    </ScreenContainer>
  );
};
