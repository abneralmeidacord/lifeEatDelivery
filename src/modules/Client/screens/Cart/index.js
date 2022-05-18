import React from 'react';
import {
  ScreenContainer,
  Text,
  Box,
  Scroll,
  ItemsList,
  AddressCard,
  Button,
  PaymentMethodList,
} from '~/components';
import { useNavigation } from '@react-navigation/native';

export const CartScreen = () => {
  const navigation = useNavigation();
  
  const goToAddress = () => {
    navigation.navigate('Address');
  };

  return (
    <ScreenContainer scroll borderColor="gray" title="Carrinho de compras">
      <Box pt={6} pb={100} alignItems="center" w={375}>
        <Scroll>
          <Box
            mt={6}
            mb={16}
            w={335}
            flexDir="row"
            justifyContent="space-between"
            alignItems="baseline">
            <Text.Title>Items escolhidos</Text.Title>
            <Text.TextLink>Alterar</Text.TextLink>
          </Box>
          <ItemsList />
          <Box
            w={335}
            bbw={1}
            pv={13}
            borderColor="primary"
            flexDir="row"
            justifyContent="space-between"
            alignItems="baseline">
            <Text.Title>Total</Text.Title>
            <Text.Title>R$ 55,60</Text.Title>
          </Box>
          <Box
            mt={24}
            mb={16}
            w={335}
            flexDir="row"
            justifyContent="space-between"
            alignItems="baseline">
            <Text.Title>Forma de Pagamento</Text.Title>
          </Box>
            <PaymentMethodList />
          <Box
            mt={24}
            mb={16}
            w={335}
            flexDir="row"
            justifyContent="space-between"
            alignItems="baseline">
            <Text.Title>Enderço de entrega</Text.Title>
            <Text.TextLink onPress={goToAddress}>Alterar</Text.TextLink>
          </Box>
          <AddressCard mb={32} />
          <Button>Finalizar Pedido</Button>
        </Scroll>
      </Box>
    </ScreenContainer>
  );
};
