import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import eventsData from '../data/events.json';

export default function EventsScreen({ navigation }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setEvents(eventsData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <FlatList
      data={events}
      keyExtractor={(e) => e.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.push('EventDetails', { id: item.id, title: item.title, event: item })}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{new Date(item.dateISO).toDateString()}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 10, padding: 10, borderRadius: 8, backgroundColor: '#fff' },
  image: { width: 60, height: 60, marginRight: 10, borderRadius: 6 },
  title: { fontWeight: 'bold' },
});
