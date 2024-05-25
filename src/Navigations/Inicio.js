import React from 'react';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import { createStackNavigator } from '@react-navigation/stack';
import Teste from '../Pages/Teste'
import Home from './Home'

const Stack = createStackNavigator();

export default function NavigationLogin() {

  return (
      <Stack.Navigator initialRouteName="Login" > 
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name='Teste' component={Teste} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}