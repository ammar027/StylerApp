import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card]}>
          <Image
            source={{
              uri: 'https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1719899248809_nick-fewings-4PDWwUD6g_4-unsplash.jpg&w=1920&q=75',
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Burj Khalifa</Text>
          <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, adipisci.</Text>
          <Text style={styles.cardFooter}>explore more</Text>
        </View>
        <View style={[styles.card]}>
          <Image
            source={{
              uri: 'https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1719899248809_nick-fewings-4PDWwUD6g_4-unsplash.jpg&w=1920&q=75',
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Burj Khalifa</Text>
          <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, adipisci.</Text>
          <Text style={styles.cardFooter}>explore more</Text>
        </View>
        {/* Add more cards here */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 7,
    marginTop: 9,
    color: '#333333',
  },
  card: {
    height: 320,
    width: 300,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFFFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    margin: 7,
    marginInlineStart: 15,
    paddingBottom: 10, // Adds space inside the card at the bottom
  },
  cardText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
    marginTop: 15,
    marginLeft: 15,
  },
  cardDescription: {
    fontSize: 15,
    fontWeight: '400',
    color: '#333333',
    marginTop: 7,
    marginLeft: 15,
  },
  cardFooter: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0077FFFF',
    marginTop: 4,
    marginLeft: 15,
    marginBottom: 10, // Adds bottom space after 'explore more'
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

