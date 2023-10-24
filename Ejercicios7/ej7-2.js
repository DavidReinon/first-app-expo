import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "./src/screens/LogIn";
import LogUp from "./src/screens/LogUp";

const Stack = createStackNavigator();
const App = () => (
    <NavigationContainer>
        <Stack.Navigator options="false">
            <Stack.Screen name="Log In" component={LogIn} />
            <Stack.Screen name="Log Up" component={LogUp} />
        </Stack.Navigator>
    </NavigationContainer>
);
export default App;
