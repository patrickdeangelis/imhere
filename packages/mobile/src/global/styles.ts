import styled from 'styled-components/native'
import globalColors from './colors'

export const TextCustomFont = styled.Text`
  font-family: RubikOne;
  font-size: 20px;
  margin-bottom: 5px;
`
export const BaseContainer = styled.View`
  flex: 1;
  background-color: ${globalColors.black};
`
export const CustomTextInput = styled.TextInput.attrs({
  placeholderTextColor: globalColors.grey
})`
  background-color: ${globalColors.white};
  font-family: RubikOne;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const TitleView = styled.View`
  width: 100%;
  height: 60;
  flex-direction: row;
  align-items: center;
`
