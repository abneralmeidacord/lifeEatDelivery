import React, { useState } from 'react';
import { Box, Touchable, Icon, Text } from '~/components/atoms';

export const Counter = ({ props }) => {
  const [count, setCount] = useState(0);
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="baseline"
      justifyContent="space-between"
      bw={1}
      br={6}
      h={24}
      w={74}
      {...props}>
      <Touchable w="30%" onClick={() => setCount(count - 1)}>
        <Icon feather name="minus" size={14} />
      </Touchable>
      <Box>
       <Text.CardTitle>{count}</Text.CardTitle>  
      </Box>
      <Touchable w="30%" onClick={() => setCount(count + 1)}>
        <Icon feather name="plus" size={14} />
      </Touchable>
    </Box>
  );
};
