import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardPromotionHome from '../../../src/components/CardsPromotionHome';
import CardDestination from '../../../src/components/CardDestination';
import { FontAwesome5 } from '@expo/vector-icons';
const index = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CardPromotionHome
          img={'d'}
          title={'title'}
          price={5000}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight:'700', lineHeight: 24, color: 'black' }}>Jadwal Terdekat</Text>
          <View style={{ marginVertical: 16 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <View>
                <Text style={{ color: 'blue', fontWeight:'700', fontSize: 20 }}>IDN</Text>
                <Text style={{ fontSize: 14, fontWeight:'400' }}>malang</Text>
              </View>
              <FontAwesome5
                name="plane"
                size={24}
                color="blue"
              />
              <View>
                <Text style={{ color: 'blue', fontWeight:'700', fontSize: 20 }}>JPN</Text>
                <Text style={{ fontSize: 14, fontWeight:'400' }}>Tokyo</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
            }}>
            <Text style={{ fontWeight:'400', fontSize: 15 }}>Departs on: 1 May, 08:00 AM</Text>
            <View>
              <Text style={{ fontWeight:'700', fontSize: 15 }}>4 days</Text>
            </View>
          </View>
        </View>

        <Text style={{ fontWeight:'700', fontSize: 16, marginTop: 16 }}>Trending Destinations</Text>
        <ScrollView horizontal>
          <View style={{ marginTop: 10, marginStart: 15 }}>
            <CardDestination />
          </View>
          <View style={{ marginTop: 10, marginStart: 15 }}>
            <CardDestination />
          </View>
          <View style={{ marginTop: 10, marginStart: 15 }}>
            <CardDestination />
          </View>
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
