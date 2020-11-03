import React, { useContext } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'
import AuthContext, { useAuth } from '../../contexts/auth'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import { TextCustomFont, TitleView } from '../../global/styles'
import { Container, RegisterButton } from './styles'

const DashboardTeacher: React.FC = () => {
  const { singOut } = useContext(AuthContext)
  const navigation = useNavigation()
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
          <Icon name="close-o" color="#00FF00" size={50}></Icon>
        </RegisterButton>
        <Logo width={250} />
      </TitleView>

      <View>
        <TextCustomFont
          style={{ color: '#00FF00', fontSize: 36, textAlign: 'center' }}
        >
          Olá {name}
        </TextCustomFont>
        <Button
          title="Login"
          onPress={() => {
            console.log('Criar disciplina')
            navigation.navigate('Discipline')
          }}
        >
          Criar disciplina
        </Button>
      </View>
      <View />
    </Container>
  )
}

export default DashboardTeacher
