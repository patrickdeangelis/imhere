import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useRef } from 'react'
import { View, ScrollView, TextInput, Alert } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getErrorsValidation from '../../util/getErrosValidation'
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
  interface SignUpForm {
    name: string
    email: string
    password: string
  }
  const handleSignUp = useCallback(async (data: SignUpForm) => {
    try {
      formRef.current.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('Digite um email valido')
          .required('Email obrigatório'),
        password: Yup.string().min(6, 'No minimo 6 digitos')
      })
      await schema.validate(data, {
        abortEarly: false
      })
      console.log(data)
      // await SignIn({
      //   email: data.email
      //   password: data.password
      // })
      // history.push('/mainPage')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getErrorsValidation(err)
        formRef.current.setErrors(errors)
        console.log(errors)
        return
      }
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro no login, cheque as credenciais'
      )
    }
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
          <Form ref={formRef} onSubmit={handleSignUp}>
            <Input
              autoCapitalize="words"
              name="name"
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
              name="email"
              placeholder="Email"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current.focus()
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
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
