import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./Ejercicios9/src/screens/Screen1";
import Screen2 from "./Ejercicios9/src/screens/Screen2";

const Satck = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Satck.Navigator options="flase">
            <Satck.Screen name="Screen1" component={Screen1} />
            <Satck.Screen name="Screen2" component={Screen2} />
        </Satck.Navigator>
    </NavigationContainer>
);
export default App;