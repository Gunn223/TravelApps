import axios from 'axios';
import qs from 'qs';
export const Register = async (data = {}) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: 'https://81d9-125-166-0-249.ngrok-free.app/addUser',
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
