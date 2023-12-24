import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { GetHistorybyIdUser } from '../../../services/GetData';
import { Link } from 'expo-router';

const History = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await GetHistorybyIdUser();
        setData(res);
      } catch (error) {
        console.log('err from load data history', error);
      }
    };
    loadData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/images/history.png')} />
        <Text style={{ fontWeight: '800', fontSize: 20 }}>History</Text>
      </View>
      {/* body/card */}

      <ScrollView style={{}}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <View
              key={index}
              style={styles.body}>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.fontContent}>Date Booking:</Text>
                  <Text>{item.action_date.slice(0, 10)}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.fontContent}>Date Booking:</Text>
                  <Text>{item.date_booking}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.fontContent}>Status Destination:</Text>
                  <Text>{item.status_destination}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={{ fontWeight: '700', fontSize: 14 }}>{item.title}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.fontContent}>IDR:</Text>
                  <Text>{item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: '700', fontSize: 14, textAlign: 'center', marginVertical: 20 }}>
              Silahkan melakukan booking
            </Text>
            <Link href="/boking">
              <Text style={{ color: '#00BFFF' }}>Booking Sekarang</Text>
            </Link>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 33,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 24,
    marginTop: 18,
  },
  body: {
    marginTop: 31,
  },
  card: {
    maxWidth: '100%',
    width: 300,
    height: 132,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 16,
    padding: 13,
  },
  cardContent: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  fontContent: {
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
  },
});
