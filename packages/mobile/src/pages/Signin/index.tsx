import React, { useCallback, useRef } from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Logo from '../../components/Logo'
import { TextCustomFont } from '../../global/styles'
import { Container, RegisterButton } from './styles'

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)
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
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="Email"
              placeholder="Email"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current.focus()
              }}
            />
            <Input
              ref={passwordInputRef}
              name="Senha"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current.submitForm()
              }}
            />
            <Button
              title="Login"
              onPress={() => {
                formRef.current.submitForm()
              }}
            >
              Login
            </Button>
          </Form>
          <RegisterButton
            onPress={() => {
              navigation.navigate('SignUp')
              console.log('SingUp')
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
