import 'react-native-gesture-handler'
import React from 'react'
import { AppLoading } from 'expo'
import { useFonts } from '@expo-google-fonts/rubik-mono-one'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/contexts/auth'
import Routes from './src/routes'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    RubikOne: require('./assets/fonts/rubik-one-regular.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
export default App
