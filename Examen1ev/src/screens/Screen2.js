import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Tab = createBottomTabNavigator();

const Screen2 = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab1" component={Tab1}></Tab.Screen>
            <Tab.Screen name="Tab2" component={Tab2}></Tab.Screen>
        </Tab.Navigator>
    );
};
export default Screen2;
