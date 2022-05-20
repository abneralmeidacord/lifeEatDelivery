import React from 'react';
import { Box, ScreenContainer, SuccessImage } from '~/components';

export const ProductsScreen = () => {
  return (
    <ScreenContainer withBack withAdd title="Produtos">
      <Box w={80} h={80}>
        <SuccessImage />
      </Box>
    </ScreenContainer>
  );
};
