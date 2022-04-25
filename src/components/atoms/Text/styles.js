import styled from 'styled-components/native'

import {
  sizeProps,
  fontProps,
  marginProps,
  paddingProps,
  getColor
} from '../../../styles/styled-system'

export const BaseText = styled.Text`
  ${sizeProps}
  ${fontProps}
  ${marginProps}
  ${paddingProps}
  color: ${({ color }) => getColor(color || 'white')}
`
