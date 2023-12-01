import axios from 'axios';
import tunel from './ngrok';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const GetUser = async (data) => {
  try {
    const res = await axios.get(`${tunel}/users`);

    data(res.data);
  } catch (error) {
    data(error.message);
    //  console.log(error);
  }
};
export const GetUserbyId = async (data) => {
  try {
    const idUser = await AsyncStorage.getItem('id');
    const res = await axios.get(`${tunel}/users/${idUser}`);
    data(res.data);
  } catch (error) {
    data(error.message);
    //  console.log(error);
  }
};
