import React from 'react';
import { FoodCard } from '~/components';
import { List } from './styles';
import { MOCK_DATA } from './settings';

export const FoodsList = () => {
  return (
    <List
      data={MOCK_DATA}
      renderItem={({ item }) => <FoodCard mb={16} food={item} />}
      keyExtractor={item => item.id}
    />
  );
};
