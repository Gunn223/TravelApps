import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, Redirect, router } from 'expo-router';

const CardDestination = ({ title, date, image, id }) => {
  console.log('card', id);
  const handlePress = (id) => {
    router.push({
      pathname: `/detail`,
      params: { id: id },
    });
  };
  return (
    <>
      <TouchableOpacity onPress={() => handlePress(id)}>
        <View>
          <View style={{ width: '100%', borderRadius: 10, overflow: 'hidden' }}>
            <Image
              width={300}
              height={150}
              resizeMode="cover"
              alt="gambar"
              source={{
                uri:
                  image ||
                  'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
          </View>
        </View>
        <Text style={{ fontSize: 14, fontWeight: '600' }}>{title}</Text>
        <Text style={{ fontSize: 12, fontWeight: '400', color: 'gray' }}>{date}</Text>
      </TouchableOpacity>
    </>
  );
};

export default CardDestination;

const styles = StyleSheet.create({
  container: {},
});
