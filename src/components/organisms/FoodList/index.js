import React from 'react';
import { Box, FoodCard } from '~/components';
import { List } from './styles';
import { MOCK_DATA } from './settings';

export const FoodsList = () => {
  return (
    <List
      vertical
      ItemSeparatorComponent={() => (
        <Box
          display="flex"
          flexDir="column"
          h={16}
          alignItems="flex-start"
          justifyContent="flex-start"
        />
      )}
      data={MOCK_DATA}
      renderItem={({ item }) => <FoodCard food={item} />}
      keyExtractor={item => item.id}
    />
  );
};
