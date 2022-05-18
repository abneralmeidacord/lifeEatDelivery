import React from 'react';
import { Box, Icon, Touchable, Text } from '~/components';
import { colors } from '~/styles';

export const PaymentMethodCard = ({
  QR,
  money,
  card,
  text,
  selected,
  onPress,
  onLongPress,
  ...props
}) => {
  return (
    <Box w={64} h={86} justifyContent="center" alignItems="center">
      <Touchable
        selected={selected}
        onPress={onPress}
        onLongPress={onLongPress}
        bg={selected ? 'primary' : 'white'}
        borderColor="primary"
        br={8}
        bw={1}
        w={64}
        h={64}
        justifyContent="center"
        alignItems="center"
        {...props}>
        { QR && (
          <Icon
            size={32}
            name="qr-code-outline"
            color={selected ? colors.white : colors.primary}
          />
        )}
        {money && (
          <Icon
            material
            size={32}
            name="hand-coin-outline"
            color={selected ? colors.white : colors.primary}
          />
        )}
        {card && (
          <Icon
            size={32}
            name="card-outline"
            color={selected ? colors.white : colors.primary}
          />
        )}
      </Touchable>
      <Text.CardText mt={8}>{text}</Text.CardText>
    </Box>
  );
};
