import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CardsPromotionHome = ({ img, title, price }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Di dalam komponen CardsPromotionHome
  const data = [
    {
      title: 'Turki',
      price: 5000000,
      img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Singapore',
      price: 7000000,
      img: 'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
    },
    {
      title: 'Prancis',
      price: 6000000,
      img: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJhbmNlfGVufDB8fDB8fHww',
    },
    // ... tambahkan data card lainnya jika diperlukan
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Waktu transisi 2 detik

    return () => clearInterval(interval);
  }, []);

  const currentCard = data[currentIndex];

  return (
    <View style={styles.container}>
      <View
        style={{
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: 20,
        }}>
        <Text style={{ fontSize: 28, fontWeight: '700', color: 'white' }}>{currentCard.title}</Text>
        <View>
          <Text style={{ fontSize: 14, fontWeight: '400', color: 'white' }}>Mulai Dari</Text>
          <Text style={{ fontSize: 32, fontWeight: '700', color: 'white' }}>
            Rp.{currentCard.price.toLocaleString('id-ID')}
          </Text>
        </View>
      </View>
      <Image
        source={{ uri: currentCard.img }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -10,
          opacity: 0.8,
        }}
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
