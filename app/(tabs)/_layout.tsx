import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import store from '../../redux/store';
// import { Provider } from 'react-redux';

export default function TabLayout() {
  return (
    // <Provider store={store}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo
                name="home"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="boking/index"
          options={{
            title: 'Boking',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                name="ticket"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile/Profilepage"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <AntDesign
                name="user"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Tabs>
    // </Provider>
  );
}
