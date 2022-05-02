import React, { useState } from 'react';
import { Box, Touchable, Icon, Text } from '~/components/atoms';

export const Counter = ({ props }) => {
  const [count, setCount] = useState(0);
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      borderColor="primary"
      bw={1}
      br={6}
      h={24}
      w={74}
      flexDir="row"
      {...props}>
      <Touchable onClick={() => setCount(count - 1)}>
        <Icon feather name="minus" size={7} />
      </Touchable>
      <Text.CardTitle>{count}</Text.CardTitle>
      <Touchable onClick={() => setCount(count + 1)}>
        <Icon feather name="plus" size={14} />
      </Touchable>
    </Box>
  );
};
