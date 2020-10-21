import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TextCustomFont, CustomTextInput } from '../../global/styles'
import { Container, RegisterButton } from './styles'
import CustomButton from '../../components/CustomButton'
import Logo from '../../components/Logo'



const Signin: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <View />
      <Logo />
      <View>
        <CustomTextInput placeholder="email" />
        <CustomTextInput placeholder="senha" secureTextEntry />
        <CustomButton title="login" onPress={() => ''} />
        <RegisterButton onPress={() => { navigation.navigate('SignUp') }}>
          <TextCustomFont style={{ color: '#00FF00' }}>
            Cadastre-se
          </TextCustomFont>
        </RegisterButton>
      </View>
      <View />
    </Container>
  )
}

export default Signin
