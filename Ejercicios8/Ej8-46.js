import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen4 from "./Ejercicios8/src/screens/screen4";
import Screen5 from "./Ejercicios8/src/screens/screen5";
import Screen6 from "./Ejercicios8/src/screens/screen6";

const Tab = createBottomTabNavigator();

const App = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Screen4" component={Screen4} />
            <Tab.Screen name="Screen5" component={Screen5} />
            <Tab.Screen name="Screen6" component={Screen6} />
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
