import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Form } from '@unform/mobile'

import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import { TextCustomFont, CustomTextInput } from '../../global/styles'
import {
  Container,
  RegisterButton,
  SwitchOption,
  Title,
  TeacherOption
} from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation()
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <View />
        <Logo />
        <View>
          <Title>
            <TextCustomFont style={{ color: '#00FF00', fontSize: 36 }}>
              Cadastro
            </TextCustomFont>
          </Title>
          <Form onSubmit={() => ''}>
            <Input name="Nome" placeholder="Nome" />
            <Input name="Email" placeholder="Email" />
            <Input name="Senha" placeholder="Senha" secureTextEntry />
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
            <Button title="Cadastrar" onPress={() => console.log('Cadastro')}>
              Casastrar
            </Button>
          </Form>
          <RegisterButton
            onPress={() => {
              navigation.navigate('SignIn')
            }}
          >
            <TextCustomFont style={{ color: '#00FF00' }}>
              Voltar para login
            </TextCustomFont>
          </RegisterButton>
        </View>
        <View />
      </Container>
    </ScrollView>
  )
}

export default SignUp
