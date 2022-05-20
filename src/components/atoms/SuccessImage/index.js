import React from 'react';
import styled from 'styled-components/native';
import checkImage from '~/assets/img/CheckSuccess.png';

export const Image = styled.Image`
  width: ${({ theme }) => theme.metrics.px(70)}px;
  height: ${({ theme }) => theme.metrics.px(68)}px;
`;

export const SuccessImage = () => <Image source={checkImage} />;
