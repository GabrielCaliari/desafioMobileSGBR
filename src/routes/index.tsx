import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Model from '../pages/Model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

const App = createNativeStackNavigator();

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await AsyncStorage.getItem('@user');
        setIsAuthenticated(!!userData); // Define como autenticado se o usuário existir
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setIsLoading(false); // Certifica-se de que o carregamento termine
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    // Exibe um indicador de carregamento enquanto verifica a autenticação
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <App.Navigator initialRouteName={isAuthenticated ? 'Home' : 'SignIn'}>
      <App.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <App.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <App.Screen name="Model" component={Model} options={{ headerShown: false }} />
    </App.Navigator>
  );
};

export default AppRoutes;
