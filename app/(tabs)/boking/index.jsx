import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const index = () => {
  const [selectedDate, setSelectedDate] = useState("5 - 11 September 2023");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.card}>
          <Image
            source={require("../../../assets/images/3.png")}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Open Trip 3 Negara</Text>
          <Text style={styles.cardSubtitle}>Departure</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedDate}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDate(itemValue)
              }
            >
              <Picker.Item
                label="5 - 11 September 2023"
                value="5 - 11 September 2023"
              />
              <Picker.Item label="1 - 7 Oktober" value="1 - 7 Oktober" />
              <Picker.Item label="15 - 21 Oktober" value="15 - 21 Oktober" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.bookingButton}>
            <Text style={styles.bookingText}>Booking</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../../assets/images/2.png")}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Open Trip 2 Negara</Text>
          <Text style={styles.cardSubtitle}>Departure</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedDate}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDate(itemValue)
              }
            >
              <Picker.Item
                label="5 - 11 September 2023"
                value="5 - 11 September 2023"
              />
              <Picker.Item label="1 - 7 Oktober" value="1 - 7 Oktober" />
              <Picker.Item label="15 - 21 Oktober" value="15 - 21 Oktober" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.bookingButton}>
            <Text style={styles.bookingText}>Booking</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../../assets/images/2.png")}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Open Trip Bali</Text>
          <Text style={styles.cardSubtitle}>Departure</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedDate}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDate(itemValue)
              }
            >
              <Picker.Item
                label="5 - 11 September 2023"
                value="5 - 11 September 2023"
              />
              <Picker.Item label="1 - 7 Oktober" value="1 - 7 Oktober" />
              <Picker.Item label="15 - 21 Oktober" value="15 - 21 Oktober" />
              <Picker.Item label="23 - 30 Oktober" value="23 - 30 Oktober" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.bookingButton}>
            <Text style={styles.bookingText}>Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 50,
    alignSelf: "center",
    margin: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardSubtitle: {
    fontSize: 16,
    color: "grey",
    marginTop: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    marginTop: 5,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  bookingButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  bookingText: {
    color: "#fff",
    fontWeight: "bold",
  },
  scrollContainer: {
    borderRadius: 20,
  },
});
