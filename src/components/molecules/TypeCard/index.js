import React, { useState } from 'react';
import { Touchable, Text } from '~/components';

export const TypeCard = ({
  onLongPress,
  onPress,
  text,
  selected,
  type,
  ...props
}) => {
  return (
    <Touchable
      display="flex"
      h={28}
      alignItems="center"
      justifyContent="center"
      ph={8}
      br={14}
      mr={8}
      selected={selected}
      onPress={onPress}
      onLongPress={onLongPress}
      bg={selected ? 'primary' : 'white'}
      bw={1}
      borderColor="primary"
      {...props}>
      <Text.CardText size={12} color={selected ? 'white' : 'primary'}>
        {text}
      </Text.CardText>
    </Touchable>
  );
};
