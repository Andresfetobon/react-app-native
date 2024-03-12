import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import StackScreen from '../../screens/StackScreen';

// library material icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// We save the properties of the tabs in a function
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='Stack' component={StackScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}
    >
      <Tab.Screen
        name='Home'
        component={MyStack}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={30} />
          ),
          tabBarBadge: 2, //This shows a badge with number "2" on the home icon
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='brightness-5'
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
