import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreensProvider } from "./ej2/ScreensContext";
import Screen1 from "./ej2/Screen1";
import Screen2 from "./ej2/Screen2";

const Stack = createStackNavigator();

const Ejercicio2 = () => {
    return (
        <ScreensProvider>
            <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
            </Stack.Navigator>
        </ScreensProvider>
    );
};

export default Ejercicio2;
