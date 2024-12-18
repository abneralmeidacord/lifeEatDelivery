import React from 'react';
import styled from 'styled-components/native';
import locationImage from '~/assets/img/location.png';

export const Image = styled.Image`
  width: ${({ theme }) => theme.metrics.px(70)}px;
  height: ${({ theme }) => theme.metrics.px(68)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)};
`;

export const LocationImage = () => <Image source={locationImage} />;
