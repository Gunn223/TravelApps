import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, Redirect } from 'expo-router';
import AsyncStorage  from '@react-native-async-storage/async-storage';

const Logout = () => {
  return <Link href={'/signin'} onPress={(AsyncStorage.removeItem('id'), AsyncStorage.removeItem('token'))} />;
};

export default Logout;


