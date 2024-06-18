import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Examen2ev/src/screens/home";
import Ejercicio2 from "./Examen2ev/src/screens/Ejercicio2";
import Ejercicio3 from "./Examen2ev/src/screens/Ejercicio3";
import Ejercicio4 from "./Examen2ev/src/screens/Ejercicio4";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Ejercicio2" component={Ejercicio2} />
                <Stack.Screen name="Ejercicio3" component={Ejercicio3} />
                <Stack.Screen name="Ejercicio4" component={Ejercicio4} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
