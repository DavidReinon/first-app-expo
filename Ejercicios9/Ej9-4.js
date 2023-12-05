import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ScreensProvider } from "./Ejercicios9/src/screens/ScreensContext";
import Screen3 from "./Ejercicios9/src/screens/Screen3";
import Screen4 from "./Ejercicios9/src/screens/Screen4";

const Stack = createStackNavigator();

const App = () => (
    <ScreensProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Screen3" component={Screen3} />
                <Stack.Screen name="Screen4" component={Screen4} />
            </Stack.Navigator>
        </NavigationContainer>
    </ScreensProvider>
);
export default App;
