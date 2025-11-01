import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [notif, setNotif] = useState(true);
  const [dark, setDark] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Text style={styles.label}>Enable Notifications</Text>
        <Switch value={notif} onValueChange={setNotif} />
      </View>
      <View style={styles.option}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  option: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  label: { fontSize: 16, fontWeight: '500' },
});
