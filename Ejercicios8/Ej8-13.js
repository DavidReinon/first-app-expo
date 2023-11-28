import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./Ejercicios8/src/screens/screen1";
import Screen2 from "./Ejercicios8/src/screens/screen2";
import Screen3 from "./Ejercicios8/src/screens/screen3";

const Tab = createBottomTabNavigator();

const App = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Screen1" component={Screen1} />
            <Tab.Screen name="Screen2" component={Screen2} />
            <Tab.Screen name="Screen3" component={Screen3} />
        </Tab.Navigator>
    </NavigationContainer>
);
export default App;

// Ej 3
// Aqui ponemos la navegacion 'Tab'.
// Dentro de la carpeta src/screens usamos Screen1,
// donde dentro de esta ponemos la navegacion 'Stack.Navigator' pero sin
// envolverlo en el <NavigationContainer> porque ya la tiene esta pantalla
// y no hace falta.
//
// Luego ya dentro de cada componente donde ScreenStack vamos cambiando
// de pantalla con 'props.navigation.navigate("ScreenStack1")' etc
