import {ScrollView, StyleSheet, Text, View} from 'react-native';

import React from 'react';

export default function ElevatedCards() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>and</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>drag</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.cardText}>to scroll</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>😊</Text>
        </View>
        {/* Add more cards here */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
  container: {
    paddingHorizontal: 0,
    marginLeft: 5,
    alignItems: 'center', // Centers cards vertically
    marginBottom: 7,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 7,
    marginTop: 7,
    color: '#333333',
    paddingLeft: 10,
  },
  card: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin:7,


  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  cardOne: {
    backgroundColor: '#FFB6C1',
  },
  cardTwo: {
    backgroundColor: '#87CEFA',
  },
  cardThree: {
    backgroundColor: '#90EE90',
  },
  cardFour: {
    backgroundColor: '#FFD700',
  },
});
