import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/home/index'
import Login from './src/components/login/Login1';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinkAccount from './src/components/link crad/LinkAccount';
import { AntDesign } from '@expo/vector-icons'; 


const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
// //////
function LoginStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Login" component={Login} />
    </SettingsStack.Navigator>
  );
}
function LinkAccountStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Paymenet" component={LinkAccount} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;


            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Login') {
              iconName = focused ? 'ios-gift' : 'ios-gift';
            }else if (route.name === 'PayMent') {
              iconName = focused ? 'ios-payment' : 'ios-payment';
            }
            return(
             <Ionicons name={iconName} size={size} color={color} />
            )
         
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Login" component={LoginStackScreen} />
        <Tab.Screen name="PayMent" component={LinkAccountStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}