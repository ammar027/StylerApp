import { Linking, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink).catch((err) =>
      console.error('Failed to open link:', err)
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>News Card</Text>
      <View style={styles.card}>
        {/* Website Preview Image */}
        <Image
          source={{
            uri: 'https://ammarmultani.vercel.app/b1Mac.png', // Replace with a valid URL for preview
          }}
          style={styles.previewImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Visit NewsRadar</Text>
          <Text style={styles.cardDescription} numberOfLines={3}>
            NewsRadar is your go-to source for the latest headlines and breaking news from around the world.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openWebsite('https://ammars-newsradar.vercel.app/')}
            activeOpacity={0.7}>
            <Text style={styles.buttonText}>Open NewsRadar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 1,
    marginBottom: 7,
    marginTop: 0,
    color: '#333333',
    paddingLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 15,
    overflow: 'hidden', // Ensures the image fits within the card
  },
  previewImage: {
    width: '100%',
    height: 150, // Adjust the height for the preview image
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
