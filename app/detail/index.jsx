import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, BackHandler, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Link, router } from 'expo-router';

const index = () => {
  useEffect(() => {
    const backAction = () => {
      router.replace('/(tabs)/home');
      return true; // Returning true prevents the event from bubbling up & the default back action from being executed
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Don't forget to remove the listener
  });

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "YES", onPress: () => BackHandler.goBack() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Link
          style={{ flex: 1 }}
          href="/(tabs)/home">
          <FontAwesome
            name="arrow-left"
            size={24}
            color="black"
          />
        </Link>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={{ flex: 1 }}></View>
        {/* biar di tengah */}
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Image
          source={require('../../assets/images/3.png')} // replace with your actual image path
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Open Trip Singapore</Text>
          <Text style={styles.seats}>Sisa Kuota : 30</Text>
          <Text style={styles.titleprice}>Start From</Text>
          <Text style={styles.price}>IDR. 4.000.000</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Itinerary</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>20 - 23 Desember 2023</Text>
            </View>
            <Text style={styles.itineraryText}>
              Marina Bay Sands - The Shoppes at Marina Bay Sands - SkyPark Observation Deck - Gardens by the Bay
              (termasuk Flower Dome dan Cloud Forest) - Supertree Grove - Pantai di Sentosa Island - Madame Tussauds
              Singapore - Resorts World Sentosa - Universal Studios Singapore - Chinatown (termasuk Buddha Tooth Relic
              Temple) - Little India - Orchard Road - Night Safari (optional)
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Fasilitas</Text>
            <Text style={styles.facilityText}>1. Akomodasi</Text>
            <Text style={styles.facilityText}>2. Transportasi</Text>
            <Text style={styles.facilityText}>3. Makan</Text>
            <Text style={styles.facilityText}>4. Tiket Wisata</Text>
            <Text style={styles.facilityText}>5. Tour Guide & Tour Leader</Text>
            <Text style={styles.facilityText}>6. Asuransi Perjalanan</Text>
          </View>
          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Detail Paket</Text>
            <FontAwesome
              name="download"
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.bookingButton}>
        <Text style={styles.bookingButtonText}>Booking</Text>
      </TouchableOpacity>
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

  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  seats: {
    fontSize: 14,
    color: 'grey',
    marginTop: 4,
  },
  titleprice: {
    marginTop: 7,
    fontSize: 16,
    marginTop: 4,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 22,
    color: '#e74c3c',
    marginTop: 4,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateContainer: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  dateText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itineraryText: {
    color: 'grey',
  },
  facilityText: {
    color: 'grey',
    marginTop: 4,
  },
  bookingButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
  },
  bookingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  detailButton: {
    flexDirection: 'row', // align icon and text horizontally
    alignItems: 'center', // center icon and text vertically
    backgroundColor: 'green',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 16,
    alignSelf: 'flex-start',
    backgroundColor: '#4cd3aa', // align to the left
  },
  detailButtonText: {
    marginRight: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
});
