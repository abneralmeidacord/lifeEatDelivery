import React from 'react';
import { Icon, Box, Text, Avatar } from '~/components/atoms';
import { useNavigation } from '@react-navigation/native';

export const Header = ({
  withBack,
  withAdd,
  withAvatar,
  title,
  subtitle,
  ...props
}) => {
  const navigation = useNavigation();

  const goToNewProduct = () => {
    navigation.navigate('NewProduct');
  };

  return (
    <Box
      bbw={1}
      borderColor="primary"
      w="100%"
      pb={16}
      pt={32}
      ph={20}
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      {...props}>
      <Box flexDir="row" alignItems="center">
        {withBack && (
          <Icon
            w={20}
            material
            name="arrow-left"
            size={24}
            onPress={() => navigation.goBack()}
            mr={16}
            ml={-4}
          />
        )}
        <Box>
          {title && <Text.ScreenTitle>{title}</Text.ScreenTitle>}
          {subtitle && <Text.RegularText mt={8}>{subtitle}</Text.RegularText>}
        </Box>
      </Box>
      {withAvatar && (
        <Avatar
          source={{
            uri: 'https://images.unsplash.com/photo-1608889453743-bf8eabeb12fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          }}
        />
      )}
      {withAdd && (
        <Icon material name="plus-circle" size={32} onPress={goToNewProduct}/>
      )}
    </Box>
  );
};
