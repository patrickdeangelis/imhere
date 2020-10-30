import React from 'react'
import { ButtonProps } from 'react-native'

import { Container, Text } from './styles'

interface Props extends ButtonProps {
  children: string
}
const Button: React.FC<Props> = ({ children, ...rest }: Props) => (
  <Container {...rest}>
    <Text>{children}</Text>
  </Container>
)
export default Button
