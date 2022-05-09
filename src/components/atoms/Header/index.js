import React from 'react';
import { Icon, Box, Text, Avatar, Touchable } from '~/components/atoms';
import { useNavigation } from '@react-navigation/native';
import { colors } from '~/styles';

export const Header = ({
  withBack,
  withAdd,
  withAvatar,
  title,
  subtitle,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <Box
      bbw={1}
      borderColor="primary"
      ph={20}
      pv={subtitle ? 24 : 0}
      pt={subtitle ? 0 : 48}
      w="100%"
      flexDir="row"
      alingItems="flex-start"
      justifyContent="space-between"
      {...props}>
      {withBack && (
        <Touchable>
          <Icon
            feather
            name="arrow-left"
            size={20}
            color="primary"
            disabled={!withBack}
            onPress={() => navigation.goBack()}
          />
        </Touchable>
      )}

      <Box>
        <Text.ScreenTitle mb={subtitle ? 8 : 0}>{title}</Text.ScreenTitle>
        <Text.RegularText>{subtitle}</Text.RegularText>
      </Box>
      {withAvatar && (
        <Avatar
          source={{
            uri: 'https://images.unsplash.com/photo-1608889453743-bf8eabeb12fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          }}
        />
      )}
      {withAdd && (
        <Touchable>
          <Icon material name="plus-circle" size={33} color="primary" />
        </Touchable>
      )}
    </Box>
  );
};
