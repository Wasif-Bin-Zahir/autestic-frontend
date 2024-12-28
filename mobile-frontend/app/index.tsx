// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>

      {/* Button to Navigate to Admin Login */}
      <View style={styles.buttonSpacing}>
        <Button
          title="Go to Admin Login"
          onPress={() => navigation.navigate('AdminLogin')}
        />
      </View>

      {/* Button to Navigate to TableScreen */}
      <View style={styles.buttonSpacing}>
        <Button
          title="View Table"
          onPress={() => navigation.navigate('TableScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonSpacing: {
    marginTop: 10, // Add spacing between buttons
    width: '100%', // Make button stretch
  },
});
