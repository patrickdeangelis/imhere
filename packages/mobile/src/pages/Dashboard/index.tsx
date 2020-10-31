import React, { useContext } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../contexts/auth'
import { TextCustomFont } from '../../global/styles'
import { Container, RegisterButton } from './styles'
import Logo from '../../components/Logo'

const Dashboard: React.FC = () => {
  const navigation = useNavigation()
  const { singOut } = useContext(AuthContext)
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
            singOut()
          }}
        >
          <TextCustomFont style={{ color: '#00FF00' }}>Logout</TextCustomFont>
        </RegisterButton>
      </View>
      <View />
    </Container>
  )
}

export default Dashboard
