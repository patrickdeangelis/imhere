import React, { useContext } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import AuthContext, { useAuth } from '../../contexts/auth'
import Logo from '../../components/Logo'
import { TextCustomFont, TitleView, CustomTextInput } from '../../global/styles'
import { Container, RegisterButton } from './styles'

const DashboardStudent: React.FC = () => {
  const { singOut } = useContext(AuthContext)
  const { user } = useAuth()
  const { name } = user
  return (
    <Container>
      <View />
      <TitleView>
        <RegisterButton
          onPress={() => {
            singOut()
          }}
        >
          <Icon name="close-o" color="#00FF00" size={70}></Icon>
        </RegisterButton>
        <Logo />
      </TitleView>
      <View>
        <TextCustomFont
          style={{ color: '#00FF00', fontSize: 36, textAlign: 'center' }}
        >
          Olá {name}
        </TextCustomFont>
        <CustomTextInput>Digite o codigo da disciplina</CustomTextInput>
      </View>
      <View />
    </Container>
  )
}

export default DashboardStudent
