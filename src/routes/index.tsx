import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Model from '../pages/Model';

const App = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator initialRouteName='SignIn'>
      <App.Screen name='SignIn' component={SignIn} options={{headerShown: false}} />
     <App.Screen name='Home' component={Home} options={{headerShown: false}} />
     <App.Screen name='Model' component={Model} options={{headerShown: false}} />
    </App.Navigator>
)
}



export default AppRoutes;
