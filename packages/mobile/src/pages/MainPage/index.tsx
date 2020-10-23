import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextCustomFont, CustomTextInput } from '../../global/styles'
import { Container, RegisterButton } from './styles'
import CustomButton from '../../components/CustomButton'
import Logo from '../../components/Logo'

const MainPage: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <View />
      <Logo />
      <View>
        <TextCustomFont style={{ color: '#00FF00', fontSize: 36 }}>
          Bem vindo
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

export default MainPage
