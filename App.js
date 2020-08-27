import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationScreen from './src/navigation/Navigation';
const Stack = createStackNavigator();
import { Provider } from 'react-redux';
import {store} from './redux/store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={NavigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;