import React from 'react';
import { Box, Touchable, Avatar, Text } from '~/components';
import { Counter } from '../Counter';
import { CounterContainer } from './styles';

export const FoodCard = ({ food }) => {
  return (
    <Box
      bg="white"
      dir="row"
      h={110}
      w={335}
      br={8}
      borderColor="primary"
      bw={1}
      flexDir="row"
      alingItems="center"
      justifyContent="space-between">
      <Box
        display="flex"
        w="30%"
        flexDir="column"
        alignItems="center"
        justifyContent="center">
        <Avatar source={{ uri: food.image }} />
      </Box>
      <Box
        display="flex"
        w="70%"
        flexDir="column"
        alignItems="flex-start"
        justifyContent="center">
        <Text.CardTitle mr={8} mb={3}>
          {food.name}
        </Text.CardTitle>
        <Text.CardText mb={6}>{food.description}</Text.CardText>
          <Counter mb={8} />
      </Box>
    </Box>
  );
};
