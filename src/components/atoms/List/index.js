import styled from 'styled-components/native';

export const List = styled.FlatList.attrs(
    ({ph, pb, theme}) => ({
      contentContainerStyle: {
        paddingHorizontal: theme.px(ph || 20),
        paddingBottom: theme.px(pb || 24),
      },
    }),
  )``;
