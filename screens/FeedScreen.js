import React, { useRef } from 'react';
import { View, Text, FlatList, Image, Button, Alert, useWindowDimensions, StyleSheet } from 'react-native';
import links from '../data/links.json';
import QuickLinkCard from '../components/QuickLinkCard';
import LegacyClock from '../components/LegacyClock';

export default function FeedScreen() {
  const flatListRef = useRef();
  const { width } = useWindowDimensions();
  const numColumns = width < 600 ? 1 : 2;

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/icon.png')} style={styles.banner} />
      <LegacyClock />
      <Button title="Scroll to Top" onPress={() => flatListRef.current.scrollToOffset({ offset: 0, animated: true })} />
      <FlatList
        ref={flatListRef}
        data={links}
        numColumns={numColumns}
        key={numColumns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <QuickLinkCard label={item.label} onPress={() => Alert.alert('Open Link', item.url)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  banner: { width: '100%', height: 180 },
});
