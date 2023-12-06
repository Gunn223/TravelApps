import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';

const trips = [
  {
    title: 'Open Trip Singapore',
    date: '20 Desember 2023',
    image:
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
  },
  {
    title: 'Open Trip Malaysia',
    date: '24 Desember 2023',
    image:
      'https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGF5c2lhfGVufDB8fDB8fHww', // replace with your actual image path
  },
  {
    title: 'Open Trip Europe',
    date: '4 Desember 2023',
    image:
      'https://images.unsplash.com/photo-1621765628059-fd3c9d2fa4fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXJvdXBlfGVufDB8fDB8fHww', // replace with your actual image path
  },
  // Add more trips as needed
];

const handleDetailPress = () => {
  router.replace('/detail'); // Replace 'Detail' with your actual route name and pass appropriate params
};

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
      />
      <ScrollView style={styles.scrollContainer}>
        {trips.map((trip, index) => (
          <View
            key={index}
            style={styles.card}>
            <Image
              source={{ uri: trip.image }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>{trip.title}</Text>
            <Text style={styles.cardDate}>{trip.date}</Text>
            <TouchableOpacity
              style={styles.detailButton}
              onPress={handleDetailPress}>
              <Text style={styles.detailText}>Detail Paket</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    margin: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardDate: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
  detailButton: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
  scrollContainer: {
    borderRadius: 20,
  },
});
