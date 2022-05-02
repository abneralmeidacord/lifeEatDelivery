import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles/colors';
import { Box, Touchable } from '~/components';

const ICONS_ASSETS = [
  {
    id: 0,
    name: 'Home',
    icon: 'silverware',
  },
  {
    id: 1,
    name: 'Cart',
    icon: 'cart-outline',
  },
  {
    id: 2,
    name: 'History',
    icon: 'history',
  },
  {
    id: 3,
    name: 'Profile',
    icon: 'account-outline',
  },
];

export const BottomBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Box
      bg="white"
      display="flex"
      flexDir="row"
      alignItems="baseline"
      justifyContent="space-between"
      w={375}
      h={64}
      btw={1}
      borderColor="gray"
      overflow="hidden"
      position="absolute"
      bottom={0}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const ItemInfo = ICONS_ASSETS.find(item => item.name === label);

        return (
          <Touchable
            display="flex"
            w="25%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            key={ItemInfo.id}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon
              material
              color={isFocused ? colors.primary : colors.gray}
              size={24}
              name={ItemInfo.icon}
            />
          </Touchable>
        );
      })}
    </Box>
  );
};
