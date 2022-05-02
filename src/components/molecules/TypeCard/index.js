import React from 'react';
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
      h={28}
      alignItems="center"
      justifyContent="center"
      ph={12}
      br={14}
      selected={selected}
      onPress={onPress}
      onLongPress={onLongPress}
      bg={selected ? 'primary' : 'white'}
      bw={1}
      borderColor="primary"
      {...props}>
      <Text.CardText color={selected ? 'white' : 'primary'}>
        {text}
      </Text.CardText>
    </Touchable>
  );
};
