import styled from 'styled-components/native';

export const Logo = styled.Image`
  width: ${({ theme }) => theme.metrics.px(169)}px;
  height: ${({ theme }) => theme.metrics.px(169)}px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
