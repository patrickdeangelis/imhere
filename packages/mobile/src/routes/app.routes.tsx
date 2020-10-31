import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../pages/Dashboard'
import CreateClass from '../pages/CreateClass'

const AppRoutes: React.FC = () => {
  const App = createStackNavigator()
  return (
    <App.Navigator headerMode="none">
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="CreateClass" component={CreateClass} />
    </App.Navigator>
  )
}
export default AppRoutes
