import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';
import { Iduser, UpdateUser } from '../../services/PostData';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Camera, CameraType } from 'expo-camera';

const Index = () => {
  const [username, setUsername] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [bio, setBio] = useState('');
  const [sampulBg, setSampulBg] = useState();
  const [imageProfile, setImageProfile] = useState();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);
 
  // camera usage
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    requestCameraPermission();
  }, []);
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
      delete result.canceled;
      setImage(result?.assets[0]?.uri);
      // Fetch gambar dan konversi ke blob
      let response = await fetch(result.assets[0].uri);
      let blob = await response.blob().then((data) => {
        console.log(data.size);
      });

      // Lakukan sesuatu dengan objek blob
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
  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <>
      <View style={{ height: '25%', position: 'relative' }}>
        <Image
          source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.214MOj7GG9JPL0prZf_FNAHaEK&pid=Api&P=0&h=180' }}
          style={{ width: '100%', height: '100%' }}
        />
        <View style={styles.header}>
          <Link
            style={{ marginTop: 10 }}
            href={'/profile/Profilepage'}>
            <AntDesign
              name="arrowleft"
              size={28}
              color="black"
            />
          </Link>

          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={{
              top: 140,
            }}>
            <View
              style={{
                display: 'flex',
                width: 32,
                height: 32,
                borderRadius: 50,
                borderColor: 'black',
                justifyContent: 'center',
                backgroundColor: 'red',
                alignItems: 'center',
                padding: 3,
              }}>
              <FontAwesome5
                name="pencil-alt"
                size={15}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{ marginTop: -50, alignItems: 'center' }}>
          <View style={{ position: 'relative', width: 92, height: 92 }}>
            <Image
              source={{
                uri: image ? image : 'https://tse3.mm.bing.net/th?id=OIP.214MOj7GG9JPL0prZf_FNAHaEK&pid=Api&P=0&h=180',
              }}
              width={92}
              height={92}
              style={{ borderRadius: 100 }}
            />
            <TouchableOpacity
              onPress={pickImage}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                padding: 8,
                borderRadius: 50,
                backgroundColor: 'lightgray',
              }}>
              <FontAwesome5
                name="pencil-alt"
                size={10}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30 }}>
            <TextInput
              placeholder="Username"
              style={styles.inputText}
              onChangeText={(v) => setUsername(v)}
            />
            <TextInput
              placeholder="Lokasi"
              style={styles.inputText}
              onChangeText={(v) => setLokasi(v)}
            />
            <TextInput
              placeholder="Email"
              style={styles.inputText}
              onChangeText={(v) => setEmail(v)}
            />
            <TextInput
              placeholder="Phone Number"
              style={styles.inputText}
              onChangeText={(v) => setPhoneNumber(v)}
            />
            <TextInput
              placeholder="Bio"
              style={styles.inputTextarea}
              onChangeText={(v) => setBio(v)}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleUpdateUser}>
            <Text style={{ color: 'white', fontWeight: '700' }}>Update</Text>
          </TouchableOpacity>
        </View>
        {/* <Camera
          style={{ width: '100%', height: 400 }}
          type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  body: {
    // position: 'relative',
    width: '100%',
  },
  inputText: {
    width: 294,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  inputTextarea: {
    width: 294,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    paddingBottom: 100,
  },
  button: {
    width: 294,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#ED1C20',
  },
});

export default Index;
