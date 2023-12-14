import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ScreensProvider } from "./Ejercicios9/src/screens/ScreensContext";
import Screen1 from "./Ejercicios9/src/screens/Screen1";
import Screen2 from "./Ejercicios9/src/screens/Screen2";

const Stack = createStackNavigator();

const App = () => (
    <ScreensProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
            </Stack.Navigator>
        </NavigationContainer>
    </ScreensProvider>
);
export default App;
