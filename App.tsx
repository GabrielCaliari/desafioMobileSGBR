import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';
import AppRoutes from './src/routes';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <NavigationContainer>
       <AuthProvider>
        <StatusBar backgroundColor="#F0F4FF" style='dark' />
        <AppRoutes />
       </AuthProvider>
    </NavigationContainer>
  );
}
