import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationScreen from './src/navigation/Navigation';
const Stack = createStackNavigator();
import { Provider } from 'react-redux';
import {store} from './src/redux/store';


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Provider store={store}>
        <Stack.Screen name="Home" component={NavigationScreen} />
        </Provider>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;