import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NoteItem({ title, desc }) {
  return (
    <View style={styles.noteCard}>
      <Text style={styles.title}>{title}</Text>
      <Text>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
  },
  title: { fontWeight: 'bold', fontSize: 16 },
});
