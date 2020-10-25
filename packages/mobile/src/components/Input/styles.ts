import styled, { css } from 'styled-components/native'
import globalColors from '../../global/colors'
// import { BaseContainer } from '../../global/styles'
interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}
// eslint-disable-next-line prettier/prettier
// export const Container = styled(BaseContainer) <ContainerProps>`
//   justify-content: space-between;
//   padding: 20px;
// `
export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-width: 2px;
  border-color: ${globalColors.black};
  border-radius: 5px;
  margin-bottom: 8px;
  ${props =>
    props.isErrored &&
    css`
      border-bottom-color: ${globalColors.red};
    `};
  ${props =>
    props.isFocused &&
    css`
      border-bottom-color: ${globalColors.green};
    `};
`
