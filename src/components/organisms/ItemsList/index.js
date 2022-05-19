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
            <Box bg="graylight" br={4} h={16} w={16} alignItems="center" mr={13}>
              <Text.TinyText fontFamily="bold">
                {item.count}
              </Text.TinyText>
            </Box>
            <Text.CardText fontFamily="regular">{item.name}</Text.CardText>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};
