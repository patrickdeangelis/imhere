import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import MainPage from './pages/Dashboard'

const Routes: React.FC = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  )
}
export default Routes
