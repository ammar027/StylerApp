import {StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>RED</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>GREEN</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>BLUE</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>BLUEee</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 7,
    marginTop: 9,
    color: '#333333',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Wrap cards to the next line if needed
    justifyContent: 'space-between', // Distribute cards evenly
  },
  card: {
    flex: 1,
    margin: 8,
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF', // Text color
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#33FF3D',
  },
  cardThree: {
    backgroundColor: '#51A2FF',
  },
});
