import React from 'react';
import { withTheme } from 'styled-components';
import { Box } from '~/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '~/styles/theme';

export const Icon = withTheme(
  ({
    iconName,
    color,
    feather,
    ionicons,
    material,
    disabled,
    size,
    ...props
  }) => {
    return (
      <Box disabled={disabled} size={size || 20}>
        {material ? (
          <Material
            name={iconName}
            size={size || 24}
            color={color || 'primary'}
          />
        ) : feather ? (
          <Feather
            name={iconName}
            size={size || 24}
            color={color || 'primary'}
          />
        ) : (
          <Ionicons
            name={iconName}
            size={size || 24}
            color={color || 'primary'}
          />
        )}
      </Box>
    );
  },
);
