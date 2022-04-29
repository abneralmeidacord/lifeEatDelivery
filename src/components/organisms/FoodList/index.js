import React from 'react';
import { Box, FoodCard } from '~/components';
import { List } from './styles';
import { MOCK_DATA } from './settings';

export const FoodsList = () => {
  return (
    <List
      ItemSeparatorComponent={() => <Box alignItems="center" justifyContent="center" h={16} />}
      data={MOCK_DATA}
      renderItem={({ item }) => <FoodCard food={item} />}
      keyExtractor={item => item.id}
    />
  );
};
