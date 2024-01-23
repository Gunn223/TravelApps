import axios from 'axios';
import qs from 'qs';
import tunel from './ngrok';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Register = async (data = {}, errMessage) => {
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
      sampul_bg:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
      image_profile:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
      email: data.email || 'Default',
      phone_number: data.phone_number || '00000',
      password: data.password || 'default',
    });

    const res = await axios.post(options.url, requestData, options);
    console.log('Registrasi berhasil:', res.data);
  } catch (error) {
    return errMessage(error.message);
  }
};

export const UpdateUser = async (data) => {
  try {
    const Iduser = await AsyncStorage.getItem('id');

    const options = {
      method: 'PUT',
      Headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: `${tunel}/users/update/${Iduser}`,
    };
    const requestData = qs.stringify({
      username: data.username || 'anonymous',
      lokasi: data.lokasi || '--ubah ke lokasi anda--',
      bio: data.bio || '--ubah ke bio anda--',
      sampul_bg: data.sampul_bg || 'sample image',
      image_profile: data.image_profile || 'sample image',
      email: data.email,
      phone_number: data.phone_number || '085xxxxxxxx',
      password: data.password,
    });

    const res = await axios.put(options.url, requestData, options);

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
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
    console.log(error);
  }
};
export const Payment = async (data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: `${tunel}/booking/payment`,
  };

  const datas = qs.stringify({
    clienttoken: 'SB-Mid-client-pb78hw7xCh1fg48O',
    amout: data.amount,
    orderid: data.orderid,
  });

  const res = await axios.post(options.url, datas, options);

  return res.data;
};
export const addBooking = async (item) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: `${tunel}/booking/addBooking`,
  };
  const data = qs.stringify({
    date_boking: item.date_boking,
    status_destination: 'boking', //default value
    destination_id: item.destination_id,
    user_id: await AsyncStorage.getItem('id'),
  });
  const res = await axios.post(options.url, data, options);

  return res.data;
};

export const Iduser = AsyncStorage.getItem('id');
