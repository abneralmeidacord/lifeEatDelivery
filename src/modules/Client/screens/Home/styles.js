import styled from 'styled-components/native';
import { Box } from '~/components';

export const HeaderContainer = styled(Box).attrs(props => {
  w: '100%';
  flexDir: 'row';
  alingItems: 'center';
  justifyContent: 'center', { ...props };
})`
  display: 'flex';
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const HeaderTextContainer = styled(Box).attrs(props => {
  w: '70%';
  flexDir: 'column';
  alingItems: 'flex-start';
  justifyContent: 'flex-start', { ...props };
})`
  display: 'flex';
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const HeaderImageContainer = styled(Box).attrs(props => {
  w: '30%';
  flexDir: 'column';
  alingItems: 'flex-end';
  justifyContent: 'flex-end', { ...props };
})`
  display: 'flex';
`;
