import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';
import { Iduser, UpdateUser } from '../../services/PostData';
const Index = () => {
  const [username, setUsername] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [bio, setBio] = useState('');
  const [sampulBg, setSampulBg] = useState('');
  const [imageProfile, setImageProfile] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [image, setImage] = useState(null);
  // const [imagename, setImagname] = useState(null);
  // console.log(image);
  // const pathImage = `file:///var/mobile/Containers/Data/Application/D03A7138-764D-4CF8-A5AA-B952E96DAF90/Library/Caches/ExponentExperienceData/%2540anonymous%252FTravelApps-feab9623-70a5-4e55-a2ab-014094ada29d/ImagePicker/91ACE55A-EFB4-4A3C-9D0F-5DDAAFE74237.jpg`;
  // const path2 =
  //   'file:///var/mobile/Containers/Data/Application/D03A7138-764D-4CF8-A5AA-B952E96DAF90/Library/Caches/ExponentExperienceData/%2540anonymous%252FTravelApps-feab9623-70a5-4e55-a2ab-014094ada29d/ImagePicker/E81C4918-58E0-4B4E-A8ED-27076967FCED.jpg';
  // const path =
  //   'file:///var/mobile/Containers/Data/Application/D03A7138-764D-4CF8-A5AA-B952E96DAF90/Library/Caches/ExponentExperienceData/%2540anonymous%252FTravelApps-feab9623-70a5-4e55-a2ab-014094ada29d/ImagePicker/BFF566BE-F98B-451F-97B3-11CCD0E3375B.jpg';
  useEffect(() => {
    const requestMediaLibraryPermissionsAsync = async () => {
      if (Platform.OS !== 'web') {
        try {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Please enable permission to access the media library.');
          }
        } catch (error) {
          console.error('Error requesting permissions:', error);
        }
      }
    };

    requestMediaLibraryPermissionsAsync();
  }, []); // Empty dependency array means this effect runs once after the initial render
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleUpdateUser = () => {
    const data = {
      username: username,
      lokasi: lokasi,
      bio: bio,
      sampul_bg: sampulBg,
      image_profile: imageProfile,
      email: email,
      phone_number: phoneNumber,
    };
    UpdateUser(Iduser, data);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
      />
      {/* {image && (
        <>
          <Image
            source={{ uri: path2 }}
            style={{ width: 200, height: 200 }}
          />
          <Image
            source={{ uri: path }}
            style={{ width: 200, height: 200 }}
          />
          <Image
            source={{ uri: pathImage }}
            style={{ width: 200, height: 200 }}
          />
        </>
      )} */}
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
        placeholder="Phone Number"
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Button
        title="Update Data"
        onPress={handleUpdateUser}
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
