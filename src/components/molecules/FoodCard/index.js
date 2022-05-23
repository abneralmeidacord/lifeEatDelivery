import React from 'react';
import { Box, Avatar, Text, Touchable } from '~/components';
import { Counter } from '../Counter';

export const FoodCard = ({ food, counter, onPress, touchable, ...props }) => {
  const Container = !!onPress ? Touchable : Box;
  return (
    <Container
      touchable={onPress}
      onPress={touchable}
      {...props}
      minH={110}
      w={335}
      br={8}
      borderColor="primary"
      bw={1}
      flexDir="row"
      alingItems="center"
      justifyContent="space-between"
      p={16}>
      <Avatar source={{ uri: food.image }} />
      <Box alignItems="flex-start" justifyContent="flex-start" ml={16} w={235}>
        <Text.CardTitle mb={3}>{food.name}</Text.CardTitle>
        <Text.CardText fontFamily="regular" mb={6}>
          {food.description}
        </Text.CardText>
        <Box
          w={220}
          flexDir="row"
          alignItems="center"
          justifyContent="space-between">
          {counter && <Counter Count={food.count} />}
          <Text.CardTitle>{food.price}</Text.CardTitle>
        </Box>
      </Box>
    </Container>
  );
};
