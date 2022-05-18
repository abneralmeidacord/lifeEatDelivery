import React from 'react';
import { Text, List, Box } from '~/components';
import { MOCK_DATA } from '../FoodList/settings';

export const ItemsList = () => {
  return (
    <Box w={335} bbw={1} borderColor="primary" flexDir="column">
      <List
        data={MOCK_DATA}
        renderItem={({ item }) => (
          <Box mb={9} flexDir="row" alignItems="baseline">
            <Text.TinyText fontFamily="bold" mr={13}>{item.count}</Text.TinyText>
            <Text.CardText fontFamily="regular">{item.name}</Text.CardText>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};
