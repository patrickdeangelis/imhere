import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuth } from '../contexts/auth'
import DashboardStudent from '../pages/DashboardStudent'
import DashboardTeacher from '../pages/DashboardTeacher'
import Discipline from '../pages/Discipline'

interface UserTypes {
  isProfessor: boolean
}

const AppRoutes: React.FC = () => {
  const { user } = useAuth()
  const { isProfessor } = user
  const App = createStackNavigator()
  if (isProfessor) {
    return (
      <App.Navigator headerMode="none">
        <App.Screen name="DashboardTeacher" component={DashboardTeacher} />
        <App.Screen name="Discipline" component={Discipline} />
      </App.Navigator>
    )
  }
  return (
    <App.Navigator headerMode="none">
      <App.Screen name="DashboardStudent" component={DashboardStudent} />
    </App.Navigator>
  )
}

export default AppRoutes
