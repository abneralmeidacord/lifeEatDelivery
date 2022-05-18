import React, { useState } from 'react';
import {
  ScreenContainer,
  Text,
  Box,
  Scroll,
  ItemsList,
  PaymentMethodCard,
  AddressCard,
  Button,
} from '~/components';

export const CartScreen = () => {
  const [selected, setSelected] = useState(false);

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
            mt={13}
            mb={16}
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
            <Text.TextLink>Alterar</Text.TextLink>
          </Box>
          <Box w={335} flexDir="row" justifyContent="space-between">
            <PaymentMethodCard
              selected={selected}
              onPress={() => setSelected(true)}
              onLongPress={() => setSelected(false)}
              QR
              text="Pix"
            />
            <PaymentMethodCard
              selected={selected}
              onPress={() => setSelected(true)}
              onLongPress={() => setSelected(false)}
              money
              text="Dinheiro"
            />
            <PaymentMethodCard
              selected={selected}
              onPress={() => setSelected(true)}
              onLongPress={() => setSelected(false)}
              card
              text="Crédito"
            />
            <PaymentMethodCard
              selected={selected}
              onPress={() => setSelected(true)}
              onLongPress={() => setSelected(false)}
              card
              text="Débito"
            />
          </Box>
          <Box
            mt={24}
            mb={16}
            w={335}
            flexDir="row"
            justifyContent="space-between"
            alignItems="baseline">
            <Text.Title>Enderço de entrega</Text.Title>
            <Text.TextLink>Alterar</Text.TextLink>
          </Box>
          <AddressCard mb={32}/>
          <Button>Finalizar Pedido</Button>
        </Scroll>
      </Box>
    </ScreenContainer>
  );
};
