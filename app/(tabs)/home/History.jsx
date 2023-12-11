import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const History = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/images/history.png')} />
        <Text style={{ fontWeight: '800', fontSize: 20 }}>History</Text>
      </View>
      {/* body/card */}
      <ScrollView style={{}}>
        <View style={styles.body}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.fontContent}>Date Booking:</Text>
              <Text>24 Nov 2023</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.fontContent}>Status Destination:</Text>
              <Text>Booked</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={{ fontWeight: '700', fontSize: 14 }}>Open Trip Singapore</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.fontContent}>IDR:</Text>
              <Text>4.000.000</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.fontContent}>Date Booking:</Text>
              <Text>24 Nov 2023</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.fontContent}>Status Destination:</Text>
              <Text>Booked</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={{ fontWeight: '700', fontSize: 14 }}>Open Trip Singapore</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.fontContent}>IDR:</Text>
              <Text>4.000.000</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.fontContent}>Date Booking:</Text>
              <Text>24 Nov 2023</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.fontContent}>Status Destination:</Text>
              <Text>Booked</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={{ fontWeight: '700', fontSize: 14 }}>Open Trip Singapore</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.fontContent}>IDR:</Text>
              <Text>4.000.000</Text>
            </View>
          </View>
        </View>
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
