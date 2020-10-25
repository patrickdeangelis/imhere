import styled, { ThemeProps } from 'styled-components/native'

import { BaseContainer, TextCustomFont } from '../../global/styles'
import globalColors from '../../global/colors'

export const Container = styled(BaseContainer)`
  justify-content: space-between;
  padding: 20px;
`

export const RegisterButton = styled.TouchableHighlight`
  margin-top: 20px;
`

export const Title = styled.View`
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`
