import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

const trips = [
  {
    title: "Open Trip Singapore",
    date: "20 Desember 2023",
    image: require("../../../assets/images/3.png"), // replace with your actual image path
  },
  {
    title: "Open Trip Malaysia",
    date: "24 Desember 2023",
    image: require("../../../assets/images/2.png"), // replace with your actual image path
  },
  {
    title: "Open Trip Europe",
    date: "4 Desember 2023",
    image: require("../../../assets/images/3.png"), // replace with your actual image path
  },
  // Add more trips as needed
];

const handleDetailPress = () => {
  router.replace("/detail"); // Replace 'Detail' with your actual route name and pass appropriate params
};

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
      />
      <ScrollView style={styles.scrollContainer}>
        {trips.map((trip, index) => (
          <View key={index} style={styles.card}>
            <Image source={trip.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{trip.title}</Text>
            <Text style={styles.cardDate}>{trip.date}</Text>
            <TouchableOpacity
              style={styles.detailButton}
              onPress={handleDetailPress}
            >
              <Text style={styles.detailText}>Detail Paket</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardDate: {
    fontSize: 16,
    color: "grey",
    marginTop: 5,
  },
  detailButton: {
    backgroundColor: "red",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  detailText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 16,
    color: "grey",
    marginTop: 5,
  },
  scrollContainer: {
    borderRadius: 20,
  },
});
