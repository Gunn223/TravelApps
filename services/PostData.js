import { url } from './Getdata';

export const AddDestination = async (destinationData) => {
  try {
    const params = new URLSearchParams();

    // Append each key-value pair from destinationData to params
    Object.entries(destinationData).forEach(([key, value]) => {
      params.append(key, value);
    });

    const response = await fetch(`${url}/destination/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(), // Convert params to URL-encoded string
    });

    if (!response.ok) {
      // Handle non-successful response
      console.error('Error:', response.statusText);
      throw new Error('Failed to add destination');
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('Error from add Destination', error);
    throw error;
  }
};
