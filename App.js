import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ejercicio1 from "./Ejercicios10Audio/src/screens/Ejercicio1";
import Ejercicio2 from "./Ejercicios10Audio/src/screens/Ejercicio2";
import Ejercicio3 from "./Ejercicios10Audio/src/screens/Ejercicio3";

const Tab = createBottomTabNavigator();

const App = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Ejercicio1" component={Ejercicio1} />
            <Tab.Screen name="Ejercicio2" component={Ejercicio2} />
            <Tab.Screen name="Ejercicio3" component={Ejercicio3} />
        </Tab.Navigator>
    </NavigationContainer>
);
export default App;
