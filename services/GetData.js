import axios from 'axios';
import tunel from './ngrok';
export const GetUser = async (data) => {
  try {
    const res = await axios.get(`${tunel}/users`);

    data(res.data);
  } catch (error) {
    data(error.message);
    //  console.log(error);
  }
};
export const GetUserbyId = async (data, id) => {
  try {
    const res = await axios.get(`${tunel}/users/${id}`);

    data(res.data);
  } catch (error) {
    data(error.message);
    //  console.log(error);
  }
};
