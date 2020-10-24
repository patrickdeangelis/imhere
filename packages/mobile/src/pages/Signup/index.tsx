import React, { useCallback, useRef } from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Switch from '../../components/Switch'
import { TextCustomFont } from '../../global/styles'
import { Container, RegisterButton, Title } from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
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
          <Title>
            <TextCustomFont style={{ color: '#00FF00', fontSize: 36 }}>
              Cadastro
            </TextCustomFont>
          </Title>
          <Form
            ref={formRef}
            onSubmit={data => {
              console.log(data)
            }}
          >
            <Input
              autoCapitalize="words"
              name="Nome"
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => {
                emailInputRef.current.focus()
              }}
            />
            <Input
              ref={emailInputRef}
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
              textContentType="newPassword" // em caso de ios
              returnKeyType="next"
              onSubmitEditing={() => {
                formRef.current.submitForm()
              }}
            />
            <TextCustomFont style={{ color: '#00FF00' }}>
              Professor
            </TextCustomFont>
            <Switch name="SwitchOption"></Switch>
            <Button
              title="Cadastrar"
              onPress={() => {
                formRef.current.submitForm()
                // console.log(isEnabled)
              }}
            >
              Cadastrar
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
