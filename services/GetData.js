import axios from 'axios';

export const GetUser = async (data, id) => {
  try {
    const res = await axios.get('https://81d9-125-166-0-249.ngrok-free.app/users');
    const findByid = res.data.find((user) => user.id_user === id);

    data(findByid);
  } catch (error) {
    data(error.message);
    //  console.log(error);
  }
};
