import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TUGAS PERTEMUAN 2 DPM</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Kotak 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Kotak 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FlexBoxLayout;
