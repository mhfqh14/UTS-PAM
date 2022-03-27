import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Pemesanan from "./src/display/Pemesanan";
import Detail from "./src/display/Detail";
import Pesanan from "./src/display/Pesanan";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda" component={BtmBar} options={{headerShown:false}}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export function BtmBar() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Pemesanan} options={{headerShown:false}}/>
      <Tab.Screen name="Pesanan" component={Pesanan} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
};

export default App;