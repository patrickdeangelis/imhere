import React, { useCallback, useRef } from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import CustomButton from '../../components/CustomButton'
import Input from '../../components/Input'
import Logo from '../../components/Logo'
import { TextCustomFont } from '../../global/styles'
import { Container, RegisterButton } from './styles'

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSignIn = useCallback((data: object) => {
    console.log(data)
  }, [])
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <View />
        <Logo />
        <View>
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input name="Email" placeholder="Email" />
            <Input name="Senha" placeholder="Senha" secureTextEntry />
            <CustomButton
              title="Login"
              onPress={() => { formRef.current?.submitForm() }}
            />
          </Form>
          <RegisterButton
            onPress={() => {
              navigation.navigate('SignUp')
            }}
          >
            <TextCustomFont style={{ color: '#00FF00' }}>
              Cadastre-se
            </TextCustomFont>
          </RegisterButton>
        </View>
        <View />
      </Container>
    </ScrollView>
  )
}

export default SignIn
