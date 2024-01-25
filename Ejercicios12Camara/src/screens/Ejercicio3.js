import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ScreensProvider } from "./ej3/ScreensContext";
import FerFoto from "./ej3/FerFoto";
import VisualizarFotos from "./ej3/VisualizarFotos";

const Stack = createStackNavigator();
const Ejercicio3 = () => {
    return (
        <ScreensProvider>
            <Stack.Navigator>
                <Stack.Screen name="FerFoto" component={FerFoto}></Stack.Screen>
                <Stack.Screen
                    name="VisualizarFotos"
                    component={VisualizarFotos}
                ></Stack.Screen>
            </Stack.Navigator>
        </ScreensProvider>
    );
};

export default Ejercicio3;
