import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import layarPemesanan from "./layarPemesanan";

const  RootStack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Pemesanan" component={layarPemesanan}/> 
      </RootStack.Navigator>
    </NavigationContainer>
  )
};