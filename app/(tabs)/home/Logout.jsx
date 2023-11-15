import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, Redirect } from 'expo-router';

const Logout = () => {
  return <Redirect href={'/signin'} />;
};

export default Logout;

const styles = StyleSheet.create({});
