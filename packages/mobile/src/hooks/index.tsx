import React from 'react'

import { AuthProvider } from './auth'
const AppProvider: React.FC = ({ children }) => (
  <AppProvider>{children}</AppProvider>
)
export default AppProvider
