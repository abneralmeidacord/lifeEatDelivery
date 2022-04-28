import React, { useState } from 'react';
import { TypeCard } from '~/components/molecules';
import { List } from './styles';

const MOCKDATA = [
  {
    id: 1,
    title: 'Escondidinho',
  },
  {
    id: 2,
    title: 'Panqueca',
  },
  {
    id: 3,
    title: 'Refeições',
  },
  {
    id: 4,
    title: 'Massas',
  },
  {
    id: 5,
    title: 'Vegano',
  },
  {
    id: 6,
    title: 'Vegetariano',
  },
];

export const TypeList = () => {
  const [selected, setSelected] = useState(false);

  return (
    <List
      horizontal
      data={MOCKDATA}
      renderItem={({ item }) => (
        <TypeCard
          selected={selected === item?.id}
          onPress={() => setSelected(item.id)}
          onLongPress={() => setSelected(false)}
          text={item.title}
        />
      )}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};
