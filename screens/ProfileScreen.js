import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ProfileScreen() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  // Validate whenever email or phone changes
  useEffect(() => {
    const errs = {};
    if (email && !/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Invalid email';
    if (phone && !/^\d{10,13}$/.test(phone)) errs.phone = 'Phone must be 10–13 digits';
    setErrors(errs);
  }, [email, phone]);

  const saveProfile = () => {
    if (Object.keys(errors).length === 0 && email && phone) {
      Alert.alert('Success', 'Profile saved successfully!');
    }
  };

  const isSaveDisabled = Object.keys(errors).length > 0 || !email || !phone;

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://placekitten.com/200/200' }} style={styles.image} />
      <Text style={styles.name}>Gayatri</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        placeholder="Phone"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

      <Button title="Save" onPress={saveProfile} disabled={isSaveDisabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16 },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', width: '80%', padding: 8, marginVertical: 6, borderRadius: 6 },
  error: { color: 'red' },
});
