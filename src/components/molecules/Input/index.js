import React, { useState } from 'react';
import { Box, Text } from '~/components';

export const Input = ({
  label,
  placeholder,
  onChangeText,
  value,
  error,
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <Box
        w={335}
        h={56}
        br={8}
        pv={8}
        ph={16}
        bw={focus ? 2 : 1}
        borderColor="primary"
        flexDir="column"
        focus={focus}
        {...props}>
        <Text.CardText color="gray">{label}</Text.CardText>
        <Text.InputText
          pt={-4}
          pl={-2}
          onEndEditing={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      </Box>
      {error && <Text.Error>{error}</Text.Error>}
    </>
  );
};
