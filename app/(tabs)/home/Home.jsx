import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CardPromotionHome from '../../../src/components/CardsPromotionHome';
import CardDestination from '../../../src/components/CardDestination';
import { GetDestination } from '../../../services/GetData';

const index = () => {
  const [item, setItem] = useState([]);
  const [itemNew, setItemNew] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await GetDestination();

        // Check if data is not empty before setting 'item'
        if (data && data.length > 0) {
          setItem(data);
        }

        // Use 'filter' to get items with 'kuota' less than 30
        const filteredData = data.filter((dt) => dt.kuota > 30);

        // Set 'itemNew' with the filtered data
        setItemNew(filteredData);
      } catch (error) {
        console.error('Error fetching destination data', error);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardPromotionHome />
        {/* <View style={{ marginTop: 20 }}>
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
                alignItems: 'center',
              }}>
              <View>
                <Text style={{ color: '#e74c3c', fontWeight: '700', fontSize: 26 }}>Malang</Text>
              </View>
              <View>
                <Image
                  source={require('../../../assets/images/plane.gif')}
                  style={{ height: 70, width: 90 }}
                />
              </View>
              <View>
                <Text style={{ color: '#e74c3c', fontWeight: '700', fontSize: 26 }}>Lombok</Text>
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
        </View> */}

        <Text style={{ fontWeight: '700', fontSize: 16, marginTop: 20 }}>Trending Destinations</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          {item.length > 0 &&
            item.map((trip, index) => (
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
          {itemNew.length > 0 &&
            itemNew.map((trip, index) => (
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
        {/* end main */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, backgroundColor: '#fefef6' },
});
export default index;
