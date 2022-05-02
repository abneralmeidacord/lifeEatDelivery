import styled from 'styled-components/native';

const SIZES = {
  small: {
    w: 60,
    h: 60,
    br: 8,
  },
  medium: {
    w: 70,
    h: 68,
    br: 12,
  },
  large: {
    w: 120,
    h: 120,
    br: 12,
  },
};

export const Avatar = styled.Image`
  width: ${({ theme, size }) =>
    theme.metrics.px(size ? SIZES[size].w : SIZES.small.w)}px;
  height: ${({ theme, size }) =>
    theme.metrics.px(size ? SIZES[size].h : SIZES.small.h)}px;
  border-radius: ${({ theme, size }) =>
    theme.metrics.px(size ? SIZES[size].br : SIZES.small.br)}px;
`;
