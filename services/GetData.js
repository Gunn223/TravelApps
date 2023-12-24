import axios from 'axios';
import tunel from './ngrok';
import AsyncStorage from '@react-native-async-storage/async-storage';

// get data destination
export const GetDestination = async () => {
  try {
    const res = await axios.get(`${tunel}/destination`);
    console.log('response data', res.data);
    return res.data;
  } catch (error) {
    console.log('services destintion get', error);
  }
};

export const GetDestinationbyId = async (id, data) => {
  try {
    const res = await axios.get(`${tunel}/destination/${id}`);
    data(res.data);
  } catch (error) {
    data('services destination by id', error);
    //  console.log(error);
  }
};
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

export const GetHistorybyIdUser = async () => {
  try {
    const idUser = await AsyncStorage.getItem('id');
    const res = await axios.get(`${tunel}/history/${idUser}`);
    return res.data;
  } catch (error) {
    console.log('err from get history by id user', error);
  }
};
