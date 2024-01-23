export const url = 'http://localhost:9000';

export const GetDestination = async () => {
  const getDestinationUrl = `${url}/destination`;

  try {
    const response = await fetch(getDestinationUrl);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching destination:', error.message);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};
export const GetHistory = async () => {
  const getHistoryurl = `${url}/history`;

  try {
    const response = await fetch(getHistoryurl);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching destination:', error.message);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};

export const getUsersAndBookings = async () => {
  const getUsersUrl = `${url}/users`;
  const getBookingsUrl = `${url}/booking`;

  try {
    const [usersResponse, bookingsResponse] = await Promise.all([fetch(getUsersUrl), fetch(getBookingsUrl)]);

    // Check response for users
    if (usersResponse.ok) {
      const usersData = await usersResponse.json();

      // Check response for bookings
      if (bookingsResponse.ok) {
        const bookingsData = await bookingsResponse.json();

        // Menggabungkan kedua set data
        const Datas = {
          users: usersData,
          bookings: bookingsData,
        };

        // Mengembalikan data gabungan
        return Datas;
      } else {
        throw new Error(`Network response was not ok for bookings: ${bookingsResponse.statusText}`);
      }
    } else {
      throw new Error(`Network response was not ok for users: ${usersResponse.statusText}`);
    }
  } catch (error) {
    console.error('Error from getUsersAndBookings:', error);
    // Anda bisa memilih untuk melempar kembali error atau mengembalikan nilai default atau null, tergantung pada kebutuhan aplikasi Anda.
    throw error;
  }
};
