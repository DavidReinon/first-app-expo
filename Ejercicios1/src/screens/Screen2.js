import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import P1Screen2 from "./P1Screen2";
import P2Screen2 from "./P2Screen2";

const Tab = createBottomTabNavigator();

const Screen2 = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Definiciones" component={P1Screen2}></Tab.Screen>
            <Tab.Screen name="Transformador" component={P2Screen2}></Tab.Screen>
        </Tab.Navigator>
    );
};
export default Screen2;
