import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  BackHandler,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { GetDestinationbyId } from '../../services/GetData';
import { addBooking } from '../../services/PostData';
const index = () => {
  const { id } = useLocalSearchParams();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaddata = async () => {
      try {
        await GetDestinationbyId(id, (data) => {
          if (data && data.length > 0) {
            setData(data);
          }
        });
      } catch (error) {
        console.log('error from get data', error);
      } finally {
        setLoading(false);
      }
    };
    loaddata();
  }, [id]);
  useEffect(() => {
    const backAction = () => {
      router.replace('/(tabs)/home');
      return true; // Returning true prevents the event from bubbling up & the default back action from being executed
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Don't forget to remove the listener
  });
  const handleBooking = async () => {
    try {
      const findDate = data[0]['date'];

      const item = {
        date_boking: findDate,
        destination_id: id,
      };

      // Menampilkan konfirmasi sebelum booking
      Alert.alert('Konfirmasi Booking', 'Anda yakin ingin melakukan booking?', [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: async () => {
            // Lakukan booking jika pengguna menekan tombol 'Ya'
            const result = await addBooking(item);

            // Tampilkan pesan berhasil atau gagal, sesuai dengan respons dari addBooking
            if (result) {
              Alert.alert('Booking Berhasil', 'Terima kasih! Booking Anda telah berhasil.');
            } else {
              Alert.alert('Booking Gagal', 'Maaf, terjadi kesalahan saat melakukan booking. Silakan coba lagi.');
            }
          },
        },
      ]);
    } catch (error) {
      console.log('error from add booking', error);
    }
  };

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
    <>
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
        {loading ? (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#0000ff"
          />
        ) : (
          data.length > 0 &&
          data.map((item, index) => (
            <View key={index}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  marginVertical: 70,
                }}>
                <Image
                  source={{
                    uri:
                      item.image ||
                      'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }} // replace with your actual image path
                  style={styles.image}
                />
                <View style={styles.content}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.seats}>Sisa Kuota : {item.kuota}</Text>
                  </View>
                  <Text style={styles.titleprice}>Start From</Text>
                  <Text style={styles.price}>IDR. {item.price.toLocaleString('id-ID')}</Text>

                  <View style={styles.section}>
                    <View style={{ display: 'flex', flexDirection: 'row', columnGap: 20, marginTop: 20 }}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 16,
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          backgroundColor: '#ccc',
                        }}>
                        Itinerary
                      </Text>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 16,
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          backgroundColor: 'red',
                          color: 'white',
                        }}>
                        {item.date}
                      </Text>
                    </View>
                    <View style={styles.dateContainer}>
                      <Text style={styles.dateText}>{item.date}</Text>
                      <Text style={styles.itineraryText}>{item.description}</Text>
                    </View>
                  </View>

                  <View style={styles.section}>
                    <Text
                      style={{
                        fontWeight: '600',
                        fontSize: 16,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        backgroundColor: '#ccc',
                        maxWidth: '26%',
                        marginBottom: 20,
                      }}>
                      Fasilitas
                    </Text>
                    <Text style={styles.facilityText}>1. {item.facilities}</Text>
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
              <TouchableOpacity
                style={styles.bookingButton}
                onPress={handleBooking}>
                <Text style={styles.bookingButtonText}>Booking</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </>
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
    borderRadius: 10,
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
    fontSize: 15,
    marginTop: 20,
  },
  price: {
    fontSize: 22,
    color: '#e74c3c',
    marginTop: 4,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateContainer: {
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
    position: 'absolute',
    bottom: 30,
    right: 0,
    left: 0,
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
