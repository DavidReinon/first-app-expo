import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Definitions from './Evaluable03/src/screens/tab/Definitions';
import Listening from './Evaluable03/src/screens/tab/Listening';
import FillInTheGaps from './Evaluable03/src/screens/tab/FillInTheGaps';
import Synonyms from './Evaluable03/src/screens/tab/Synonyms';

const Tab = createBottomTabNavigator();
const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Definitions" component={Definitions} />
      <Tab.Screen name="Listening" component={Listening} />
      <Tab.Screen name="FillInTheGaps" component={FillInTheGaps} />
      <Tab.Screen name="Synonyms" component={Synonyms} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default App;