import React from 'react';
import { withTheme } from 'styled-components';
import { Box } from '~/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export const Icon = withTheme(
  ({ name, color, feather, ionicons, material, disabled, size }) => {
    return (
      <Box>
        {material ? (
          <Material
            name={name}
            size={size || 24}
            color={color || 'primary'}
          />
        ) : feather ? (
          <Feather
            name={name}
            size={size || 24}
            color={color || 'primary'}
          />
        ) : (
          <Ionicons
            name={name}
            size={size || 24}
            color={color || 'primary'}
          />
        )}
      </Box>
    );
  },
);
