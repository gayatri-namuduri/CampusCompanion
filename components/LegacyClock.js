import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class LegacyClock extends Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Current Time: {this.state.time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 8 },
  text: { fontSize: 16, fontWeight: 'bold' },
});
