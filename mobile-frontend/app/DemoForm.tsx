// app/DemoForm.tsx
import React from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  field1: string;
  field2: string;
};

export default function DemoForm() {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    Alert.alert('Form Data', JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="field1"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Field 1"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="field2"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Field 2"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 15 },
});
