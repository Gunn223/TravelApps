import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const Index = () => {
  const [username, setUsername] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [bio, setBio] = useState('');
  const [sampulBg, setSampulBg] = useState('');
  const [imageProfile, setImageProfile] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePostData = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/update/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          lokasi,
          bio,
          sampul_bg: sampulBg,
          image_profile: imageProfile,
          email,
          phone_number: phoneNumber,
        }),
      });

      if (!response.ok) {
        throw new Error('Terjadi kesalahan saat mengirim data');
      }

      const result = await response.json();
      Alert.alert('Sukses', 'Data berhasil diperbarui');
    } catch (error) {
      Alert.alert('Error', `Terjadi kesalahan: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Pages Update</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Lokasi"
        onChangeText={(text) => setLokasi(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        onChangeText={(text) => setBio(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sampul Background"
        onChangeText={(text) => setSampulBg(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image Profile"
        onChangeText={(text) => setImageProfile(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Button
        title="Update Data"
        onPress={handlePostData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: '100%',
  },
});

export default Index;
