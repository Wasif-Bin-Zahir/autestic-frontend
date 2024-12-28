import React from 'react';
import { View, Alert, StyleSheet, Text } from 'react-native'; // Ensure Text is imported
import { useForm, Controller } from 'react-hook-form';
import Input from '../components/Input';
import Button from '../components/Button';
import api from '../services/api';

type FormData = {
  username: string;
  password: string;
};

export default function AdminLogin({ navigation }: { navigation: any }) {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await api.post('/admin/login', data);
      console.log('Login Successful:', response.data);
      navigation.navigate('TableScreen');
    } catch (error: any) {
      console.error('Login Failed:', error.response?.data || error.message);
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="username"
        rules={{ required: 'Username is required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              placeholder="Username"
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: 'Password is required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              placeholder="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </>
        )}
      />

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  error: { color: 'red', marginBottom: 8 },
});
