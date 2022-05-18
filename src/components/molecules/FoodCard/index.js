import React from 'react';
import { Box, Avatar, Text } from '~/components';
import { Counter } from '../Counter';

export const FoodCard = ({ food, ...props }) => {
  return (
    <Box  
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
      <Box alignItems="flex-start" justifyContent="flex-start" ml={16} w={250} pr={15}>
        <Text.CardTitle mb={3}>{food.name}</Text.CardTitle>
        <Text.CardText fontFamily="regular" mb={6}>
          {food.description}
        </Text.CardText>
        <Counter count={food.count}/>
      </Box>
    </Box>
  );
};
