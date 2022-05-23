import React from 'react';
import {
  Box,
  FoodsList,
  ScreenContainer,
  Scroll,
  SuccessImage,
} from '~/components';

export const ProductsScreen = () => {
  return (
    <ScreenContainer mb={24} scroll withAdd title="Produtos">
      <Scroll mb={50}>
        <FoodsList touchable />
      </Scroll>
    </ScreenContainer>
  );
};
