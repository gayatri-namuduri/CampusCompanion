import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Platform, ToastAndroid, Alert, ScrollView, StyleSheet } from 'react-native';
import NoteItem from '../components/NoteItem';

export default function NotesScreen() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [notes, setNotes] = useState([]);
  const [errors, setErrors] = useState({});
  const descRef = useRef();

  // Validate whenever title or desc changes
  useEffect(() => {
    const errs = {};
    if (title.length > 0 && title.length < 3) errs.title = 'Min 3 chars';
    if (desc.length > 0 && desc.length < 10) errs.desc = 'Min 10 chars';
    setErrors(errs);
  }, [title, desc]);

  const saveNote = () => {
    // Only save if valid
    if (Object.keys(errors).length > 0 || title === '' || desc === '') return;

    setNotes([...notes, { id: Date.now(), title, desc }]);
    setTitle('');
    setDesc('');

    Platform.OS === 'android'
      ? ToastAndroid.show('Note saved!', ToastAndroid.SHORT)
      : Alert.alert('Success', 'Note saved!');
  };

  const isSaveDisabled = Object.keys(errors).length > 0 || title === '' || desc === '';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add a Note</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        returnKeyType="next"
        onSubmitEditing={() => descRef.current.focus()}
      />
      {errors.title && <Text style={styles.error}>{errors.title}</Text>}
      <TextInput
        ref={descRef}
        style={[styles.input, { height: 80 }]}
        placeholder="Description"
        value={desc}
        multiline
        onChangeText={setDesc}
      />
      {errors.desc && <Text style={styles.error}>{errors.desc}</Text>}
      <Button title="Save Note" disabled={isSaveDisabled} onPress={saveNote} />

      <Text style={styles.header}>Saved Notes</Text>
      {notes.map((n) => (
        <NoteItem key={n.id} title={n.title} desc={n.desc} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6, marginVertical: 6 },
  header: { fontSize: 18, fontWeight: '700', marginTop: 16 },
  error: { color: 'red' },
});
