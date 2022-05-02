import React from 'react';
import PropTypes from 'prop-types';

import { BaseText } from './styles';
import {
  fontProps,
  sizePropsTypes,
  colorPropsTypes,
  marginPropsTypes,
  paddingPropsTypes,
} from '~/styles/styled-system';

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
  <BaseText fontsize={14} fontFamily="medium" {...props}>
    {children}
  </BaseText>
);

Text.TinyText = ({ children, ...props }) => (
  <BaseText fontsize={12} fontFamily="regular" {...props}>
    {children}
  </BaseText>
);

Text.CardTitle = ({ children, ...props }) => (
  <BaseText fontsize={14} fontFamily="bold" {...props}>
    {children}
  </BaseText>
);
Text.CardText = ({ children, ...props }) => (
  <BaseText fontsize={10} fontFamily="medium" {...props}>
    {children}
  </BaseText>
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
