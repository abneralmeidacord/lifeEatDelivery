import React from 'react';
import styled from 'styled-components/native';
import foodBG from '~/assets/img/FoodBG.png';

export const Image = styled.ImageBackground`
  width: ${({ theme }) => theme.metrics.px(375)}px;
  height: ${({ theme }) => theme.metrics.px(218)}px;
`;

export const FoodBg = ({ children }) => (
  <Image source={foodBG}>{children}</Image>
);
