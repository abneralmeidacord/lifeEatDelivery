import React from 'react';
import { Box, Text, Icon } from '~/components';

export const OrderCard = ({ waiting, ...props }) => {
  return (
    <Box
      w={325}
      br={8}
      bw={1}
      borderColor="primary"
      minH={124}
      ph={16}
      pv={16}
      flexDir="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      {...props}>
      <Text.CardTitle>Pedido Nº 68231</Text.CardTitle>
      {waiting && (
        <Box mb={8} flexDir="row" alignItems="baseline">
          <Box h={14} w={14} alignItems="center" mr={13}>
            <Icon material size={14} name="progress-clock" color="orange" />
          </Box>
          <Text.BoldText fontSize={12} color="orange">
            Aguardando confirmação
          </Text.BoldText>
        </Box>
      )}
      <Box mb={4} flexDir="row" alignItems="baseline">
        <Box bg="graylight" br={4} h={16} w={16} alignItems="center" mr={13}>
          <Text.TinyText fontFamily="bold">2</Text.TinyText>
        </Box>
        <Text.CardText mb={4} fontFamily="regular">
          Escondidinho de Batata e Carne
        </Text.CardText>
      </Box>
      <Text.BoldText mb={4} fontSize={12}>
        mais 4 itens
      </Text.BoldText>
      <Text.CardText mb={4} fontFamily="regular">
        Entrega realizada dia 22/01/2022
      </Text.CardText>
      <Text.BoldText fontSize={12}>Valor total: R$ 13,90</Text.BoldText>
    </Box>
  );
};
