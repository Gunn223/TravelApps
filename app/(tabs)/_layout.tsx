import { Tabs } from "expo-router";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"} // Use "home" if focused, else "home-outline"
              size={24}
              color={focused ? "red" : "black"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "red" : "black" }}>Home</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="boking/index"
        options={{
          title: "Booking",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={
                focused ? "ticket-confirmation" : "ticket-confirmation-outline"
              }
              size={24}
              color={focused ? "red" : "black"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "red" : "black" }}>Booking</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile/Profilepage"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={24}
              color={focused ? "red" : "black"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "red" : "black" }}>Profile</Text>
          ),
        }}
      />
    </Tabs>
  );
}
