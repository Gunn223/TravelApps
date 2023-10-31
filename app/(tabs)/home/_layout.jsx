import { StyleSheet, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";

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
    <Drawer screenOptions={{ drawerType: "back" }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="History"
        options={{
          drawerLabel: "History",
        }}
      />
      <Drawer.Screen
        name="Setting"
        options={{
          drawerLabel: "Setting",
        }}
      />
    </Drawer>
  );
};
