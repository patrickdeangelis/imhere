import React, { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TextCustomFont, CustomTextInput } from '../../global/styles'
import { Container, RegisterButton, SwitchOption, Title, TeacherOption } from './styles'
import CustomButton from '../../components/CustomButton'
import Logo from '../../components/Logo'

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Container>
      <View />
      <Logo />
      <View>
        <Title>
          <TextCustomFont style={{ color: '#00FF00', fontSize: 36 }}>
            Cadastro
          </TextCustomFont>
        </Title>
        <CustomTextInput placeholder="Nome" />
        <CustomTextInput placeholder="Email" />
        <CustomTextInput placeholder="Senha" secureTextEntry />
        <TeacherOption>
          <TextCustomFont style={{ color: '#00FF00' }}>
            Professor
          </TextCustomFont>
          <SwitchOption
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#00FF00' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </TeacherOption>
        <CustomButton title="Cadastrar" onPress={() => ''} />
        <RegisterButton onPress={() => { navigation.navigate('SignIn') }}>
          <TextCustomFont style={{ color: '#00FF00' }}>
            Voltar para login
          </TextCustomFont>
        </RegisterButton>
      </View>
      <View />
    </Container>
  )
}

export default SignUp
