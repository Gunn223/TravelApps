import axios from 'axios';
import tunel from './ngrok';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const GetUser = async (data, id) => {
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
    const getById = await AsyncStorage.getItem('id');

    const res = await axios.get(`${tunel}/user/${getById}`);
    data(res.data);
    // const res = await axios.get(`${tunel}/user/${id}`);
    // data(res.data);
  } catch (error) {
    data(error.message);
    //  console.log(error);
  }
};
