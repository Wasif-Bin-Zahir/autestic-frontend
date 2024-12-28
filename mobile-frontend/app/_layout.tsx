// app/_layout.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminLogin from './AdminLogin';
import DemoForm from './DemoForm';
import TableScreen from './TableScreen';
import HomeScreen from './index'; // Import HomeScreen

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} />
      <Stack.Screen name="DemoForm" component={DemoForm} />
      <Stack.Screen name="TableScreen" component={TableScreen} />
    </Stack.Navigator>
  );
}
