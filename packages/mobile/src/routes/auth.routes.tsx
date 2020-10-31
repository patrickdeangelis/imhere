import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'

const AuthRoutes: React.FC = () => {
  const Auth = createStackNavigator()
  return (
    <Auth.Navigator headerMode="none">
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  )
}
export default AuthRoutes
