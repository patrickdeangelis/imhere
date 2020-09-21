import styled from 'styled-components/native'

import globalColors from '../../global/colors'
import { TextCustomFont } from '../../global/styles'

export const Container = styled.View`
  background-color: ${globalColors.green};
  color: ${globalColors.black};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Text = TextCustomFont
