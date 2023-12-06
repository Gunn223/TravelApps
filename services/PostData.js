import axios from 'axios';
import qs from 'qs';
import tunel from './ngrok';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Register = async (data = {}) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: `${tunel}/users/addUser`,
    };

    // Menggunakan qs.stringify untuk merubah objek data menjadi format x-www-form-urlencoded
    const requestData = qs.stringify({
      username: data.username || 'default',
      lokasi: data.lokasi || 'Default',
      bio: data.bio || 'Default',
      sampul_bg: data.sampul_bg || 'default',
      image_profile: data.image_profile || 'default',
      email: data.email || 'Default',
      phone_number: data.phone_number || '00000',
      password: data.password || 'default',
    });
    console.log(requestData);
    const res = await axios.post(options.url, requestData, options);
    console.log('Registrasi berhasil:', res.data);
  } catch (error) {
    console.error('Error Register:', error);
  }
};

export const UpdateUser = async (id, userData) => {
  try {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      url: `${tunel}/users/update/${id}`,
    };
    const requestData = qs.stringify({
      username: data.username || 'default',
      lokasi: data.lokasi || 'Default',
      bio: data.bio || 'Default',
      sampul_bg: data.sampul_bg || 'default',
      image_profile: data.image_profile || 'default',
      email: data.email || 'Default',
      phone_number: data.phone_number || '00000',
      password: data.password || 'default',
    });

    const res = await axios.post(options.url, requestData, options);

    return res.data;
  } catch (error) {
    console.error('Error updating user:', error);
    // Depending on your error handling strategy, you might want to re-throw the error or return a specific value
    throw error;
  }
};
export const Login = async (userData, errMessage) => {
  try {
    // console.log(userData);
    // terdapat bug 2 kali click baru data bisa login
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // Change content type
      url: `${tunel}/users/login`,
    };
    const data = qs.stringify({
      email: userData.email,
      password: userData.password,
    });

    const res = await axios.post(options.url, data, options);
    // console.log(res.data);
    return await res.data;
  } catch (error) {
    errMessage(error);
  }
};

export const Iduser = AsyncStorage.getItem('id');
