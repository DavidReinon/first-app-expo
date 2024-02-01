import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreensProvider } from "./ej4/ScreensContext";
import Screen1 from "./ej4/Screen1";
import Screen2 from "./ej4/Screen2";

const Stack = createStackNavigator();

const Ejercicio4 = () => {
    return (
        <ScreensProvider>
            <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
            </Stack.Navigator>
        </ScreensProvider>
    );
};

export default Ejercicio4;
