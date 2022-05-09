import React from 'react';
import { FoodCard } from '~/components';
import { List } from '~/components/atoms';
import { MOCK_DATA } from './settings';

export const FoodsList = () => {
  return (
    <List
    pb={340}
      data={MOCK_DATA}
      renderItem={({ item }) => <FoodCard mb={12} food={item} />}
      keyExtractor={item => item.id}
    />
  );
};
