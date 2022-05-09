import React, { useState } from 'react';
import { Box, Touchable, Icon, Text } from '~/components/atoms';

export const Counter = ({ props }) => {
  const [count, setCount] = useState(0);
  return (
    <Box
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      bw={1}
      br={6}
      h={24}
      w={74}
      ph={6}
      {...props}>
      <Touchable
        onPress={() => setCount(count - 1)}
        disabled={count === 0}>
        <Icon feather name="minus" size={14} />
      </Touchable>
      <Box>
        <Text.CardTitle>{count}</Text.CardTitle>
      </Box>
      <Touchable onPress={() => setCount(count + 1)}>
        <Icon feather  name="plus" size={14} />
      </Touchable>
    </Box>
  );
};
