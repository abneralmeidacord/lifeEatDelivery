import styled from 'styled-components/native';
import { sizeProps, sizePropsTypes } from '../../../styles/styled-system';

export const List = styled.FlatList.attrs(({ ph, pb, theme }) => ({
  contentContainerStyle: {
    paddingHorizontal: theme.px(ph || 20),
    paddingBottom: theme.px(pb || 24),
  },
}))`
  ${sizeProps}
`;

List.propTypes = {
  ...sizePropsTypes,
};
