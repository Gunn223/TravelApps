import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="boking/index"
        options={{
          title: 'Boking',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile/Profilepage"
        options={{
          title: 'Profilepage',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
