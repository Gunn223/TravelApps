import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';
import { Link } from 'expo-router';
import { GetDestination } from '../../../services/GetData';

const Index = () => {
  const [data, setData] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [inputTanggal, setInputTanggal] = useState('2024-03-21');
  const [formattedTanggal, setFormattedTanggal] = useState('');

  const formatTanggal = () => {
    const tanggalObj = new Date(inputTanggal);
    const namaBulan = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];

    const tanggal = tanggalObj.getDate();
    const bulan = namaBulan[tanggalObj.getMonth()];
    const tahun = tanggalObj.getFullYear();

    const hasilFormat = `${tanggal}-${bulan}-${tahun}`;
    setFormattedTanggal(hasilFormat);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const destinationData = await GetDestination();
        if (destinationData && destinationData.length > 0) {
          const filterDestinationKuota = destinationData.filter((item) => item.kuota > 0);
          if (filterDestinationKuota) {
            const formattedTanggal = filterDestinationKuota.map((tgl) => tgl.date);
            setInputTanggal(formattedTanggal);

            setData(filterDestinationKuota);
          }
          formatTanggal();
          animateFadeIn(); // Panggil fungsi animateFadeIn setelah data diambil
        }
      } catch (error) {
        console.log('err destination get data', error);
      }
    };
    loadData();
  }, []);

  const animateFadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Durasi animasi dalam milidetik
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
      />
      <ScrollView style={styles.scrollContainer}>
        {data.map((item, index) => (
          <Animated.View
            key={index}
            style={{ ...styles.card, opacity: fadeAnim }}>
            <Image
              source={{ uri: item.image }}
              style={styles.cardImage}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardTitle}>{formattedTanggal}</Text>
            </View>
            <Link
              href={`/detail?id=${item.id_destination}`}
              style={styles.detailButton}>
              <Text style={styles.detailText}>Detail Paket</Text>
            </Link>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

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
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
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
    textAlign: 'center',
  },
  scrollContainer: {
    borderRadius: 20,
  },
});

export default Index;
