import React, { useState } from 'react';
import { OrderCard, ScreenContainer, Box, Touchable, Text } from '~/components';

export const HistoryScreen = () => {
  const [selected, setSelected] = useState(false);

  return (
    <ScreenContainer scroll borderColor="gray" title="Meus pedidos">
      <Box
        mb={8}
        flexDir="row"
        alignItems="baseline"
        justifyContent="space-between">
        <Touchable pv={16} w={187} bbw={2} borderColor="primary" alignItems="center">
          <Text.BoldText>Aguardando</Text.BoldText>
        </Touchable>
        <Touchable pv={16} w={187} bbw={1} borderColor="gray" alignItems="center">
          <Text.BoldText>Finalizados</Text.BoldText>
        </Touchable>
      </Box>
      <Box mt={12} alignItems="center">
        <OrderCard waiting />
        <OrderCard mt={12} waiting />
        <OrderCard mt={12} waiting />
      </Box>
    </ScreenContainer>
  );
};
