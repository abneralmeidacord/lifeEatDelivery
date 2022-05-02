import React, { useState } from 'react';
import { TypeCard } from '~/components/molecules';
import { List } from './styles';

const MOCKDATA = [
  {
    id: 1,
    title: 'Todos',
  },
  {
    id: 2,
    title: 'Escondidinho',
  },
  {
    id: 3,
    title: 'Panqueca',
  },
  {
    id: 4,
    title: 'Refeições',
  },
  {
    id: 5,
    title: 'Massas',
  },
  {
    id: 6,
    title: 'Vegano',
  },
  {
    id: 7,
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
          text={item.title}
          selected={selected === item?.id}
          onPress={() => setSelected(item.id)}
          onLongPress={() => setSelected(false)}
        />
      )}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};
