import React, { useRef, useCallback } from 'react'
import { View, TextInput, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import api from '../../services/api'
import getErrorsValidation from '../../util/getErrosValidation'
import { useAuth } from '../../contexts/auth'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import { TextCustomFont, TitleView } from '../../global/styles'
import { Container, RegisterButton } from './styles'

const Discipline: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const descriptInputRef = useRef<TextInput>(null)
  const workInputRef = useRef<TextInput>(null)
  const emailInputRef = useRef<TextInput>(null)

  const { token, user } = useAuth()
  console.log(token)
  const { email } = user

  interface DisciplineForm {
    discipline: string
    description: string
    workloader: number
  }
  const handleDiscipline = useCallback(
    async (data: DisciplineForm) => {
      try {
        formRef.current.setErrors({})
        const schema = Yup.object().shape({
          discipline: Yup.string().required('Nome obrigatório'),
          description: Yup.string().required('Descrição obrigatória'),
          workloader: Yup.number().required('Digite uma carga horaria'),
          email: Yup.string()
            .email('Digite um email valido')
            .required('Email obrigatório')
        })
        await schema.validate(data, {
          abortEarly: false
        })
        console.log(data)
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        }
        await api.post('/discipline/add', data, config)
        Alert.alert('Disciplina criada', 'Agora voce pode criar as aulas')
        navigation.goBack()
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getErrorsValidation(err)
          formRef.current.setErrors(errors)
          console.log(errors)
          return
        }
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro no cadastro, cheque as credenciais'
        )
      }
    },
    [navigation]
  )

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <View />
        <TitleView>
          <RegisterButton
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Icon
              name="chevron-with-circle-left"
              color="#00FF00"
              size={40}
            ></Icon>
          </RegisterButton>
          <Logo width={250} />
        </TitleView>
        <View>
          <TextCustomFont
            style={{ color: '#00FF00', fontSize: 30, textAlign: 'center' }}
          >
            Criar Disciplina
          </TextCustomFont>
          <Form ref={formRef} onSubmit={handleDiscipline}>
            <Input
              autoCapitalize="words"
              name="discipline"
              placeholder="Nome da disciplina"
              returnKeyType="next"
              onSubmitEditing={() => {
                descriptInputRef.current.focus()
              }}
            />
            <Input
              ref={descriptInputRef}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              name="description"
              placeholder="Descrição"
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
              placeholder="Email de confirmação"
              returnKeyType="next"
              onSubmitEditing={() => {
                workInputRef.current.focus()
              }}
            />
            <Input
              ref={workInputRef}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              name="workloader"
              placeholder="Carga horaria"
              returnKeyType="next"
              onSubmitEditing={() => {
                formRef.current.submitForm()
              }}
            />
            <Button
              title="Cadastrar"
              onPress={() => {
                formRef.current.submitForm()
              }}
            >
              Cadastrar
            </Button>
          </Form>
        </View>
        <View />
      </Container>
    </ScrollView>
  )
}

export default Discipline
