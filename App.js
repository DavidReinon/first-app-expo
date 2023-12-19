import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ejercicio1 from "./Ejercicios10Audio/src/screens/Ejercicio1";
import Ejercicio2 from "./Ejercicios10Audio/src/screens/Ejercicio2";
import Ejercicio3 from "./Ejercicios10Audio/src/screens/Ejercicio3";
import Ejercicio4 from "./Ejercicios10Audio/src/screens/Ejercicio4";
import Ejercicio5 from "./Ejercicios10Audio/src/screens/Ejercicio5";
import Ejercicio6 from "./Ejercicios10Audio/src/screens/Ejercicio6";
import Ejercicio7 from "./Ejercicios10Audio/src/screens/Ejercicio7";

const Tab = createBottomTabNavigator();

const App = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Ejercicio1" component={Ejercicio1} />
            <Tab.Screen name="Ejercicio2" component={Ejercicio2} />
            <Tab.Screen name="Ejercicio3" component={Ejercicio3} />
            <Tab.Screen name="Ejercicio4" component={Ejercicio4} />
            <Tab.Screen name="Ejercicio5" component={Ejercicio5} />
            <Tab.Screen name="Ejercicio6" component={Ejercicio6} />
            <Tab.Screen name="Ejercicio7" component={Ejercicio7} />
        </Tab.Navigator>
    </NavigationContainer>
);
export default App;
