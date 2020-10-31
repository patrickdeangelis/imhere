import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextCustomFont, CustomTextInput } from '../../global/styles'
import { Container, RegisterButton } from './styles'
import Button from '../../components/Button'
import Logo from '../../components/Logo'

const ClassRegister: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <View />
      <Logo />
      <View>
        <TextCustomFont style={{ color: '#00FF00', fontSize: 36 }}>
          Pagina de registro de aulas
        </TextCustomFont>
        <RegisterButton
          onPress={() => {
            navigation.navigate('SignUp')
          }}
        >
          <TextCustomFont style={{ color: '#00FF00' }}>Logout</TextCustomFont>
        </RegisterButton>
      </View>
      <View />
    </Container>
  )
}

export default ClassRegister