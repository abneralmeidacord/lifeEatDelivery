import React from 'react';
import { Box, Text, Touchable } from '~/components';

export const DateCard = ({ date, selected, onPress, text, ...props }) => {
  return (
    <Touchable
      selected={selected}
      onPress={onPress}
      bg={selected ? 'primary' : 'white'}
      borderColor="primary"
      br={8}
      bw={1}
      justifyContent="center"
      alignItems="center"
      h={87}
      w={64}
      flexDir="column"
      {...props}>
      <Box>
        <Text.BoldText size={20} color={selected ? 'white' : 'primary'}>
          {date.number}
        </Text.BoldText>
      </Box>
      <Box mt={14}>
        <Text.CardText color={selected ? 'white' : 'primary'}>
          {date.day}
        </Text.CardText>
      </Box>
    </Touchable>
  );
};
