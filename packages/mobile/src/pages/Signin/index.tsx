import React, { useCallback, useRef } from 'react'
import {
  View,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
  SafeAreaView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Logo from '../../components/Logo'
import getErrorsValidation from '../../util/getErrosValidation'
import { TextCustomFont } from '../../global/styles'
import { Container, RegisterButton } from './styles'

interface SignInForm {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const handleSignIn = useCallback(async (data: SignInForm) => {
    // const data = {
    //   email,
    //   password
    // }
    try {
      formRef.current.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email valido')
          .required('Email obrigatório'),
        password: Yup.string().required('Senha obrigatória')
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
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
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
