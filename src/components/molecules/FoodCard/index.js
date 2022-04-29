import React from 'react';
import { Box, Touchable, Avatar, Text } from '~/components';
import { Counter } from '../Counter';

export const FoodCard = ({ food }) => {
  return (
    <Box
      bg="white"
      dir="row"
      h="100"
      w={335}
      br={8}
      borderColor="primary">
      <Box h="100%" w="30%" alignItems="center" justifyContent="center">
        <Avatar source={{ uri: food.image }} />
      </Box>
      <Box
        w="70%"
        h="100%"
        display="flex"
        flexDir="column"
        alignItems="flex-start"
        justifyContent="center">
        <Text.CardTitle mb={3}>{food.name}</Text.CardTitle>
        <Text.CardText mb={6}>{food.description}</Text.CardText>
      </Box>
      <Touchable w="100%" display="flex" flexDir="row" alignItems="baseline">
        <Counter />
      </Touchable>
    </Box>
  );
};
