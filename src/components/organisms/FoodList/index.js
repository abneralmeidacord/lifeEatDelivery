import React from 'react';
import { FoodCard, List } from '~/components';
import { MOCK_DATA } from './settings';

export const FoodsList = () => {
  return (
    <List
      data={MOCK_DATA}
      renderItem={({ item }) => <FoodCard mb={12} food={item} />}
      keyExtractor={item => item.id}
    />
  );
};
