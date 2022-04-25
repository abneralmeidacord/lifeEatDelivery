import { colors } from './colors'
import { metrics } from './metrics'

const fonts = {
  bold: 'Montserrat-Bold',
  medium: 'Montserrat-Medium',
  regular: 'Montserrat-Regular',
  semiBold: 'Montserrat-SemiBold',
  extraBold: 'Montserrat-ExtraBold',
}

export const theme = {
  colors,
  fonts,
  metrics,
  ...fonts,
  ...metrics,
  ...colors,
}
