import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { AppLoading } from 'expo'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { useAuth } from '../contexts/auth'

const Routes: React.FC = () => {
  const { user, loading } = useAuth()
  console.log(user)
  // if (loading) {
  //   return (
  //     <AppLoading></AppLoading>
  //     // <View
  //     //   style={{
  //     //     flex: 1,
  //     //     justifyContent: 'center',
  //     //     alignItems: 'center',
  //     //     backgroundColor: '#000000'
  //     //   }}
  //     // >

  //     //   <ActivityIndicator size="large" color="#00FF5F"></ActivityIndicator>
  //     // </View>
  //   )
  // }

  return user ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
