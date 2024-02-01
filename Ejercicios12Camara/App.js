import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Ejercicio1 from "./Ejercicios12Camara/src/screens/Ejercicio1";
import Ejercicio2 from "./Ejercicios12Camara/src/screens/Ejercicio2";
import Ejercicio3 from "./Ejercicios12Camara/src/screens/Ejercicio3";
import Ejercicio4 from "./Ejercicios12Camara/src/screens/Ejercicio4";

const Tab = createBottomTabNavigator();
const App = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Ejercicio1" component={Ejercicio1} />
            <Tab.Screen name="Ejercicio2" component={Ejercicio2} />
            <Tab.Screen name="Ejercicio3" component={Ejercicio3} />
            <Tab.Screen name="Ejercicio4" component={Ejercicio4} />
        </Tab.Navigator>
    </NavigationContainer>
);
export default App;
