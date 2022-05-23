import React from 'react';
import { FoodCard, List } from '~/components';
import { Touchable } from '~/components/atoms';
import { MOCK_DATA } from './settings';
import { useNavigation } from '@react-navigation/native';

export const FoodsList = ({ Counter, touchable }) => {
  const navigation = useNavigation();

  const goToNewProduct = () => {
    navigation.navigate('NewProduct');
  };

  return (
    <List
      data={MOCK_DATA}
      renderItem={({ item }) => (
        <FoodCard
          touchable={goToNewProduct}
          counter={Counter}
          onPress={touchable}
          mb={12}
          food={item}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};
