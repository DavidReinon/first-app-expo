import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator options="false">
                <Stack.Screen name="Screen1" component={Screen1}></Stack.Screen>
                <Stack.Screen name="Screen2" component={Screen1}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
