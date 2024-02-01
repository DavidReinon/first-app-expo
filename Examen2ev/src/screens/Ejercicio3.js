import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreensProvider } from "./ej3/ScreensContext";
import Screen1 from "./ej3/FerFoto";
import Screen2 from "./ej3/VisualizarFotos";

const Stack = createStackNavigator();

const Ejercicio3 = () => {
    return (
        <ScreensProvider>
            <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
            </Stack.Navigator>
        </ScreensProvider>
    );
};

export default Ejercicio3;
