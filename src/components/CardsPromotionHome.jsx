import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const CardsPromotionHome = ({ img, title, price }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'flex-end',
          padding: 20,
        }}>
        <Text style={{ fontSize: 28, fontWeight: '700', color: 'white' }}>Paris</Text>
        <View>
          <Text style={{ fontSize: 14, fontWeight: '400 ', color: 'white' }}>FROM</Text>
          <Text style={{ fontSize: 32, fontWeight: '700', color: 'white' }}>${price}</Text>
        </View>
      </View>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D',
        }}
        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -10, opacity: 0.8 }}
      />
    </View>
  );
};

export default CardsPromotionHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 180,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
