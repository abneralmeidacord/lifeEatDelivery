import React from 'react';
import { Box, Button, Input, ScreenContainer } from '~/components';
import { FoodBg } from './styles';

export const NewProductScreen = () => {
  return (
    <ScreenContainer title="Pedidos" withBack>
      <Box>
        <Box>
          <FoodBg/>
        </Box>
        <Button outline borderColor="error">
          Excluir Produto
        </Button>
      </Box>
    </ScreenContainer>
  );
};
