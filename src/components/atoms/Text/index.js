import React from 'react';
import PropTypes from 'prop-types';

import { BaseText, InputText } from './styles';
import {
  fontProps,
  sizePropsTypes,
  colorPropsTypes,
  marginPropsTypes,
  paddingPropsTypes,
} from '~/styles/styled-system';
import { Touchable } from '../Touchable';

export const Text = ({ children, ...props }) => (
  <BaseText {...props}>{children}</BaseText>
);
Text.ScreenTitle = ({ children, ...props }) => (
  <BaseText fontSize={24} fontFamily="bold" {...props}>
    {children}
  </BaseText>
);

Text.Title = ({ children, ...props }) => (
  <BaseText fontSize={18} fontFamily="bold" color="primary" {...props}>
    {children}
  </BaseText>
);

Text.RegularText = ({ children, ...props }) => (
  <BaseText fontsize={14} fontFamily="regular" {...props}>
    {children}
  </BaseText>
);

Text.MediumText = ({ children, ...props }) => (
  <BaseText fontsize={14} fontFamily="semiBold" {...props}>
    {children}
  </BaseText>
);

Text.BoldText = ({ children, ...props }) => (
  <BaseText fontsize={16} fontFamily="bold" {...props}>
    {children}
  </BaseText>
);

Text.CardTitle = ({ children, ...props }) => (
  <BaseText fontsize={14} fontFamily="bold" {...props}>
    {children}
  </BaseText>
);

Text.CardText = ({ children, ...props }) => (
  <BaseText fontSize={12} fontFamily="semiBold" {...props}>
    {children}
  </BaseText>
);

Text.InputText = ({ children, ...props }) => (
  <InputText fontSize={16} fontFamily="semiBold" color="black" {...props}>
    {children}
  </InputText>
);

Text.TinyText = ({ children, ...props }) => (
  <BaseText fontSize={10} fontFamily="regular" {...props}>
    {children}
  </BaseText>
);

Text.Error = ({ children, ...props }) => (
  <BaseText fontSize={12} fontFamily="bold" color="error" {...props}>
    {children}
  </BaseText>
);
Text.TextLink = ({ onPress, children, ...props }) => (
  <Touchable
    onPress={onPress}
    align="flex-end"
    h={24}
    justify="flex-end"
    {...props}>
    <BaseText fontSize={12} fontFamily="semiBold" {...props}>
      {children}
    </BaseText>
  </Touchable>
);

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.func,
  ]),
  ...sizePropsTypes,
  ...colorPropsTypes,
  ...marginPropsTypes,
  ...paddingPropsTypes,
};
