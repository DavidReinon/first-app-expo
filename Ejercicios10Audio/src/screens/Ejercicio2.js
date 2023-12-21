import { createStackNavigator } from "@react-navigation/stack";
import { ScreensProvider } from "./ScreensContext";
import Tab2_1 from "./Stack2_1";
import Tab2_2 from "./Stack2_2";

const Stack = createStackNavigator();

const Ejercicio2 = () => (
    <ScreensProvider>
        <Stack.Navigator>
            <Stack.Screen name="Tab2_1" component={Tab2_1} />
            <Stack.Screen name="Tab2_2" component={Tab2_2} />
        </Stack.Navigator>
    </ScreensProvider>
);
export default Ejercicio2;
