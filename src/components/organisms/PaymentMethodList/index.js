import React, { useState } from 'react';
import { PaymentMethodCard, List, Box } from '~/components';

const MOCKDATA = [
  {
    id: 1,
    qr: 'QR',
    title: 'Pix',
  },
  {
    id: 2,
    money: 'money',
    title: 'Dinheiro',
  },
  {
    id: 3,
    card: 'card',
    title: 'Crédito',
  },
  {
    id: 4,
    card: 'card',
    title: 'Débito',
  },
];

export const PaymentMethodList = () => {
  const [selected, setSelected] = useState(false);

  return (
    <List
      w={375}
      h={86}
      horizontal
      data={MOCKDATA}
      renderItem={({ item }) => (
        <Box w={91} h={87} flexDir="row" alignItems="center" justifyContent="space-between">
          <PaymentMethodCard
            QR={item.qr}
            money={item.money}
            card={item.card}
            text={item.title}
            selected={selected === item?.id}
            onPress={() => setSelected(item.id)}
            onLongPress={() => setSelected(false)}
          />
        </Box>
      )}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};
