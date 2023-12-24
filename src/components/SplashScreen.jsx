// SplashScreen.js
import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Text } from 'react-native';

const SplashScreen = ({ onFinish }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Contoh penggunaan useEffect untuk mensimulasikan proses loading
  useEffect(() => {
    // Misalnya, setelah 3 detik, atur isLoading menjadi false
    const timer = setTimeout(() => {
      setIsLoading(false);
      onFinish(); // Panggil onFinish ketika loading selesai
    }, 2000);

    // Membersihkan timer pada unmount atau ketika isLoading berubah
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.png')}
        style={styles.image}
        width={400}
      />
      <Text style={{ fontWeight: '800', fontSize: 16, marginBottom: 20, color: 'white' }}>
        Malang Gateway Tour & Travel
      </Text>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="#000000"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED1B24',
  },
  image: {
    flex: 1, // Set flex ke 1 agar gambar memenuhi seluruh container
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default SplashScreen;
