import { createStackNavigator } from "@react-navigation/stack";
import { ScreensProvider } from "./ScreensContext";
import Stack5_1 from "./Stack5_1";
import Stack5_2 from "./Stack5_2";

const Stack = createStackNavigator();

const Ejercicio5 = () => (
    <ScreensProvider>
        <Stack.Navigator>
            <Stack.Screen name="Stack5_1" component={Stack5_1} />
            <Stack.Screen name="Stack5_2" component={Stack5_2} />
        </Stack.Navigator>
    </ScreensProvider>
);
export default Ejercicio5;
