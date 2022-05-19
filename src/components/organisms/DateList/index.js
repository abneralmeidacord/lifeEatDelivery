import React, { useState } from 'react';
import { DateCard, List } from '~/components';
import { MOCK_DATA } from './settings.js';

export const DateList = () => {
  const [selected, setSelected] = useState(false);

  return (
    <List
      horizontal
      data={MOCK_DATA}
      renderItem={({ item }) => (
        <DateCard
          selected={selected === item?.id}
          onPress={() => setSelected(item.id)}
          mr={16}
          date={item}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};
