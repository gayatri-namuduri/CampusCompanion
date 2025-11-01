import React, { useRef, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, Animated } from 'react-native';

export default function EventDetailsScreen({ route, navigation }) {
  const { event } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Image source={{ uri: event.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text>{new Date(event.dateISO).toLocaleDateString()}</Text>
      <Text style={styles.desc}>{event.description}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 12 },
  desc: { marginTop: 8, fontSize: 16 },
});
