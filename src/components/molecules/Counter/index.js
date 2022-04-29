import React, { useState } from 'react';
import { Box, Touchable, Icon, Text } from '~/components/atoms';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Box>
      <Text>{count}</Text>
      <Touchable onClick={() => setCount(count + 1)}>
        <Icon feather name="plus" size={14} />
      </Touchable>
      <Touchable onClick={() => setCount(count - 1)}>
        <Icon feather name="minus" size={14} />
      </Touchable>
    </Box>
  );
};
