import { SafeAreaView, ScrollView, StyleSheet, View, StatusBar } from 'react-native';
import React from 'react';
import FlatCards from './src/components/FlatCards.tsx';
import ElevatedCards from './src/components/ElevatedCards.tsx';
import FancyCards from './src/components/FancyCards.tsx';
import ActionCard from './src/components/ActionCard.tsx';
import ContactLists from './src/components/ContactLists.tsx';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.section}>
            <FlatCards />
          </View>
          <View style={styles.section}>
            <ElevatedCards />
          </View>
          <View style={styles.section}>
            <FancyCards />
          </View>
          <View style={styles.section}>
            <ActionCard/>
          </View>
          <View style={styles.section}>
            <ContactLists/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light neutral background
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  section: {
    marginBottom: 7, // Adds spacing between sections
    backgroundColor: '#FFFFFF', // White background for sections
    borderRadius: 15,
    elevation: 2, // Slight shadow for sections
    shadowRadius: 4,

  },
});
