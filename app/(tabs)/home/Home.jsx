import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CardPromotionHome from '../../../src/components/CardsPromotionHome';
import CardDestination from '../../../src/components/CardDestination';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { GetDestination } from '../../../services/GetData';

const index = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await GetDestination();
        if (data && data.length > 0) {
          setItem(data);
        }
      } catch (error) {
        console.log('err destination get data', error);
      }
    };
    loadData();
  }, []);
  console.log(item);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardPromotionHome
          img={'d'}
          title={'title'}
          price={'25Juta'}
        />
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 24,
              color: 'black',
            }}>
            Jadwal Terdekat
          </Text>
          <View style={{ marginVertical: 16 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <View>
                <Text style={{ color: '#e74c3c', fontWeight: '700', fontSize: 20 }}>Malang</Text>
                <Text style={{ fontSize: 14, fontWeight: '400' }}>Abd. Saleh</Text>
              </View>
              <FontAwesome5
                name="plane"
                size={24}
                color="#e74c3c"
              />
              <View>
                <Text style={{ color: '#e74c3c', fontWeight: '700', fontSize: 20 }}>Lombok</Text>
                <Text style={{ fontSize: 14, fontWeight: '400' }}>LIA </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontWeight: '400', fontSize: 15 }}>Keberangkatan : 5 November, 08:00 WIB</Text>
            <View>
              <Text style={{ fontWeight: '700', fontSize: 15 }}>4 Hari</Text>
            </View>
          </View>
        </View>

        <Text style={{ fontWeight: '700', fontSize: 16, marginTop: 20 }}>Trending Destinations</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          {item.map((trip, index) => (
            <View
              key={index}
              style={{ marginTop: 10, marginStart: 15 }}>
              <CardDestination
                title={trip.title}
                date={trip.date}
                image={trip.image}
                id={trip.id_destination}
              />
            </View>
          ))}
        </ScrollView>

        <Text style={{ fontWeight: '700', fontSize: 16, marginTop: 20 }}>New Destinations</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          {item.map((trip, index) => (
            <View
              key={index}
              style={{ marginTop: 10, marginStart: 15 }}>
              <CardDestination
                title={trip.title}
                date={trip.date}
                image={trip.image}
              />
            </View>
          ))}
        </ScrollView>
        {/* end main */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16 },
});
export default index;
