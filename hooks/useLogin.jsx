import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';
export const useLogin = async () => {
  const CurentUser = await AsyncStorage.getItem('username');
  const CurentPassword = await AsyncStorage.getItem('password');

  if (CurentUser && CurentPassword) {
    return <Redirect href={'../(tabs)/home'} />;
  }
  return <Redirect href={'../signin'} />;
};
