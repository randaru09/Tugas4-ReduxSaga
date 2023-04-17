import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Datalist from './components/Datalist';
import Saga from './components/redux_saga';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Datalist" component={Datalist} options={{ headerShown: false }}/>
        <Stack.Screen name="Saga" component={Saga} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}