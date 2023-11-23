import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Ejercicios1/src/screens/Home";
import Screen1 from "./Ejercicios1/src/screens/Screen1";
import Screen2 from "./Ejercicios1/src/screens/Screen2";

const Stack = createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator options="false">
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Screen1" component={Screen1}></Stack.Screen>
                <Stack.Screen name="Screen2" component={Screen2}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
