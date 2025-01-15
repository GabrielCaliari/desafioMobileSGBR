import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/Routes/index';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
