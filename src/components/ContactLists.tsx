import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

type Contact = {
  id: string;
  name: string;
  phone: string;
  avatar: string;
};

const contacts: Contact[] = [
  {
    id: '1',
    name: 'John Doe',
    phone: '+123 456 7890',
    avatar: 'https://lh3.googleusercontent.com/a/AATXAJxMb143yW7IwmFAnFk2d6mvNE2ZvGrSZaIrzb7K=k-s64',
  },
  {
    id: '2',
    name: 'Jane Smith',
    phone: '+987 654 3210',
    avatar: 'https://i.sstatic.net/htYjr.png?s=64',
  },
  {
    id: '3',
    name: 'Sam Wilson',
    phone: '+456 789 1230',
    avatar: 'https://i.sstatic.net/BYggb.jpg?s=64',
  },
  {
    id: '4',
    name: 'Emily Johnson',
    phone: '+321 654 9870',
    avatar: 'https://www.gravatar.com/avatar/80f939bb2d8594724ae95eb0cbca3e5e?s=64&d=identicon&r=PG&f=y&so-version=2',
  },
];

export default function ContactLists() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.list} scrollEnabled={true}>
        {contacts.map(({id, name, phone, avatar}) => (
          <View key={id} style={styles.contactCard}>
            <Image
            source={{
              uri: avatar
            }}
            style={styles.avatar}
            />
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 10,
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
  list: {
    paddingBottom: 3,
  },
  contactCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 4, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // Horizontal and vertical offset
    shadowOpacity: 0.3, // Opacity of shadow
    shadowRadius: 3, // Blur radius
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  phone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
