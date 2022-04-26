import styled from 'styled-components/native'
import {
  colorProps,
  colorPropsTypes,
  flexProps,
  flexPropsTypes,
  marginProps,
  marginPropsTypes,
  paddingProps,
  paddingPropsTypes,
  sizeProps,
  sizePropsTypes,
  borderProps,
  borderPropsTypes,
} from '~/styles/styled-system'

export const Scroll = styled.ScrollView.attrs(
  ({ horizontal, pt, pb, pl, pr, theme, align }) => ({
    horizontal: horizontal,
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      paddingTop: theme.px(pt || 0),
      paddingBottom: theme.px(pb || 0),
      paddingLeft: theme.px(pl || 0),
      paddingRight: theme.px(pr || 0),
      alignItems: align || 'center',
    },
  }),
)`
  ${sizeProps}
  ${flexProps}
  ${colorProps}
  ${marginProps}
`

Scroll.propTypes = {
  ...sizePropsTypes,
  ...flexPropsTypes,
  ...colorPropsTypes,
  ...paddingPropsTypes,
  ...marginPropsTypes,
  ...borderPropsTypes,
}
