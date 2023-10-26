import { StyleSheet } from 'react-native';
import React from 'react';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
  return (
    <>
      {/* <Stack /> */}
      <Burgerr />
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
const Burgerr = () => {
  return (
    <Drawer screenOptions={{ drawerType: 'back' }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="(drawerlayout)/Coba/Coba"
        options={{
          drawerLabel: 'coba',
        }}
      />
    </Drawer>
  );
};
