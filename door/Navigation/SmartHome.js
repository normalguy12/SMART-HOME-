import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../Screens/home";
import Door from "../Screens/door";
import DoorPass from "../Screens/doorPass"

const Stack = createNativeStackNavigator();

export default function SmartHome()
{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Home Screen'}
                    component={Home}
                    options={{ headerShown: false }}> 
                </Stack.Screen>
                <Stack.Screen
                    name={'Door Screen'}
                    component={Door}
                    options={{ headerShown: false }}>
                </Stack.Screen>
                
                <Stack.Screen
                    name={'DoorPass Screen'}
                    component={DoorPass}
                    options={{ headerShown: false }}>
                </Stack.Screen>
                
            </Stack.Navigator>
        </NavigationContainer>       
    );
}
