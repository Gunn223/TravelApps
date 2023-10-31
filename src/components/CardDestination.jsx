import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardDestination = () => {
  return (
    <>
      <View>
        <View style={{ width: "100%", borderRadius: 10, overflow: "hidden" }}>
          <Image
            width={300}
            height={150}
            resizeMode="cover"
            alt="gambar"
            source={{
              uri: "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
        </View>
      </View>
      <Text style={{ fontSize: 14, fontWeight: "600" }}>Raja Ampat</Text>
      <Text style={{ fontSize: 12, fontWeight: "400", color: "gray" }}>
        Papua Barat Daya, Indonesia
      </Text>
    </>
  );
};

export default CardDestination;

const styles = StyleSheet.create({
  container: {},
});
