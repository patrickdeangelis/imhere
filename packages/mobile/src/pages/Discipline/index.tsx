import React, { useRef } from 'react'
import { View, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import { TextCustomFont, TitleView } from '../../global/styles'
import { Container, RegisterButton } from './styles'

const Discipline: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const dataFimInputRef = useRef<TextInput>(null)
  const dataIniInputRef = useRef<TextInput>(null)
  const daysInputRef = useRef<TextInput>(null)
  const horaIniInputRef = useRef<TextInput>(null)
  const horaFimInputRef = useRef<TextInput>(null)
  const toleranceInputRef = useRef<TextInput>(null)
  return (
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
            size={54}
          ></Icon>
        </RegisterButton>
        <Logo />
      </TitleView>
      <View>
        <TextCustomFont style={{ color: '#00FF00', fontSize: 36 }}>
          Criar Disciplina
        </TextCustomFont>
        <Form
          ref={formRef}
          onSubmit={() => {
            console.log('Criada!!')
          }}
        >
          <Input
            autoCapitalize="words"
            name="name"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              dataIniInputRef.current.focus()
            }}
          />
          <Input
            ref={dataIniInputRef}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="dataIni"
            placeholder="Data inicio"
            returnKeyType="next"
            onSubmitEditing={() => {
              dataFimInputRef.current.focus()
            }}
          />
          <Input
            ref={dataFimInputRef}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="dataFim"
            placeholder="Data fim"
            returnKeyType="next"
            onSubmitEditing={() => {
              daysInputRef.current.focus()
            }}
          />
          <Input
            ref={daysInputRef}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="days"
            placeholder="Dias"
            returnKeyType="next"
            onSubmitEditing={() => {
              horaIniInputRef.current.focus()
            }}
          />
          <Input
            ref={horaIniInputRef}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="horaIni"
            placeholder="Hora inicio"
            returnKeyType="next"
            onSubmitEditing={() => {
              horaFimInputRef.current.focus()
            }}
          />
          <Input
            ref={horaFimInputRef}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="horaFim"
            placeholder="Hora fim"
            returnKeyType="next"
            onSubmitEditing={() => {
              toleranceInputRef.current.focus()
            }}
          />
          <Input
            ref={toleranceInputRef}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="tolerance"
            placeholder="Tolerancia"
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
  )
}

export default Discipline
