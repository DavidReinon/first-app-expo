import { createStackNavigator } from "@react-navigation/stack";
import { ScreensProvider } from "./ScreensContext";
import Stack2_1 from "./Stack2_1";
import Stack2_2 from "./Stack2_2";

const Stack = createStackNavigator();

const Ejercicio2 = () => (
    <ScreensProvider>
        <Stack.Navigator>
            <Stack.Screen name="Stack2_1" component={Stack2_1} />
            <Stack.Screen name="Stack2_2" component={Stack2_2} />
        </Stack.Navigator>
    </ScreensProvider>
);
export default Ejercicio2;
