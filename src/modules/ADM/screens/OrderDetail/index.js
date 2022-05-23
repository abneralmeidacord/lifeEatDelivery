import React, { useState } from 'react';
import {
  Box,
  ScreenContainer,
  AddressCard,
  ClientCard,
  Button,
  Scroll,
  PaymentMethodList,
  ItemsList,
  Text,
  Icon,
  SuccessModal,
} from '~/components';

export const OrderDetailScreen = () => {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  

  return (
    <ScreenContainer withBack title="Detalhes do pedido">
      <Box pt={6} pb={80} alignItems="center" w={375}>
        <Scroll>
          <Box
            mt={24}
            mb={16}
            ph={16}
            w={375}
            justifyContent="space-between"
            flexDir="column"
            alignItems="flex-start">
            <Text.Title>Pedido Nº 68231</Text.Title>
            <Box mb={8} flexDir="row" alignItems="baseline">
              <Box h={14} w={14} alignItems="center" mr={13}>
                <Icon material size={14} name="progress-clock" color="orange" />
              </Box>
              <Text.BoldText fontSize={12} color="orange">
                Aguardando confirmação
              </Text.BoldText>
            </Box>
            <Text.CardText>Pedido realizado dia 22/02/2022</Text.CardText>
            <Text.Title mv={16}>Cliente</Text.Title>
            <ClientCard />
            <Box>
              <Text.Title mv={16}>Itens do pedido</Text.Title>
              <ItemsList />
            </Box>
            <Text.Title mv={16}>Forma de pagamento</Text.Title>
            <PaymentMethodList />
            <Box mb={32}>
              <Text.Title mv={16}>Enderço de entrega</Text.Title>
              <AddressCard />
            </Box>
            <Button onPress={() => setSuccessModalVisible(true)}>
              Confirmar pedido
            </Button>
            {successModalVisible && (
              <Box alignItems="center">
                <SuccessModal
                  visilble={successModalVisible}
                  text="Pedido realizado com sucesso!"
                />
              </Box>
            )}
          </Box>
        </Scroll>
      </Box>
    </ScreenContainer>
  );
};
