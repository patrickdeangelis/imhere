import React from 'react'
import { AppLoading } from 'expo'
import { useFonts } from '@expo-google-fonts/rubik-mono-one'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    RubikOne: require('./assets/fonts/rubik-one-regular.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Routes />
    </>
  )
}
