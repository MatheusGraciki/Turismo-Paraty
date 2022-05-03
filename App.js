import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { React } from 'react';
import { View,Text,Button,Image } from 'react-native';
import TelaInicial from './Components/TelaInicial';
import TelaRestaurantes from './Components/TelaRestaurantes'
import TelaPasseios from './Components/TelaPasseios'
import TelaHospedagem from './Components/TelaHospedagem'


const Stack = createStackNavigator();

export default function App(){
  return(
    
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerStyle: {
          height: 65, 
          backgroundColor: 'white',  }, }} > 

          <Stack.Screen name="Tela inicial" component = {TelaInicial}/>
          <Stack.Screen name="Restaurantes" component = {TelaRestaurantes}/>
          <Stack.Screen name="Passeios" component = {TelaPasseios}/>
          <Stack.Screen name="Hospedagem" component = {TelaHospedagem}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}