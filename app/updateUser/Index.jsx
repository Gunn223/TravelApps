import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Image } from 'react-native';
import { UpdateUser } from '../../services/PostData';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { Camera, CameraType } from 'expo-camera';
import { GetUserbyId } from '../../services/GetData';
const Index = () => {
  const [username, setUsername] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [bio, setBio] = useState('');
  const [sampulBg, setSampulBg] = useState(null);
  const [imageProfile, setImageProfile] = useState(null);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [item, setItem] = useState([]);
  console.log(username);
  useEffect(() => {
    GetUserbyId((data) => {
      setItem(data || []);
      const loadData = async () => {
        try {
          const res = await data;
          setUsername(res[0].username);
          setLokasi(res[0].lokasi);
          setBio(res[0].bio);
          setSampulBg(res[0].sampul_bg);
          setImageProfile(res[0].image_profile);
          setEmail(res[0].email);
          setPhoneNumber(res[0].phone_number);
        } catch (error) {
          console.log('err from load data', error);
        }
      };
      loadData();
    });
  }, []);
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
      // Tidak perlu menghapus properti canceled karena properti tersebut tidak ada pada objek result
      // delete resultBg.cancelled;

      const pathFolder = `${FileSystem.documentDirectory}images/`;
      await FileSystem.makeDirectoryAsync(pathFolder, { intermediates: true });

      // Tentukan nama file untuk gambar (Anda bisa menggunakan timestamp atau ID unik)
      const fileName = `image_${Date.now()}.jpg`; // Pastikan menambahkan ekstensi file yang sesuai

      // Path lengkap untuk menyimpan gambar
      const filePath = `${pathFolder}${fileName}`;

      // Pindahkan gambar ke path yang ditentukan
      await FileSystem.moveAsync({
        from: result.assets[0].uri,
        to: filePath,
      });

      setImageProfile(filePath);

      // Lakukan sesuatu dengan objek blob
    }
  };
  const pickImageBanner = async () => {
    try {
      // Tidak diperlukan izin khusus untuk meluncurkan perpustakaan gambar

      const resultBg = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!resultBg.canceled) {
        // Tidak perlu menghapus properti canceled karena properti tersebut tidak ada pada objek result
        // delete resultBg.cancelled;

        const pathFolder = `${FileSystem.documentDirectory}images/`;
        await FileSystem.makeDirectoryAsync(pathFolder, { intermediates: true });

        // Tentukan nama file untuk gambar (Anda bisa menggunakan timestamp atau ID unik)
        const fileName = `image_${Date.now()}.jpg`; // Pastikan menambahkan ekstensi file yang sesuai

        // Path lengkap untuk menyimpan gambar
        const filePath = `${pathFolder}${fileName}`;

        // Pindahkan gambar ke path yang ditentukan
        await FileSystem.moveAsync({
          from: resultBg.assets[0].uri,
          to: filePath,
        });

        setSampulBg(filePath);
      }
    } catch (error) {
      console.error('Error picking banner image', error);
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
    UpdateUser(data);
  };
  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <>
      {item.map((data, index) => (
        <View key={index}>
          <View style={{ height: '25%', position: 'relative' }}>
            <Image
              source={{
                uri: data.sampul_bg
                  ? sampulBg
                  : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
              }}
              style={{ width: '100%', height: '100%' }}
            />
            <View style={styles.header}>
              <Link href={'/profile/Profilepage'}>
                <AntDesign
                  name="arrowleft"
                  size={28}
                  color="black"
                />
              </Link>
              <TouchableOpacity
                onPress={pickImageBanner}
                style={{ borderRadius: 20, backgroundColor: 'white' }}>
                <View
                  style={{
                    display: 'flex',
                    width: 32,
                    height: 32,
                    borderRadius: 50,
                    borderColor: 'black',
                    justifyContent: 'center',
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
                    uri: data.image_profile
                      ? imageProfile
                      : 'https://cdn1.iconfinder.com/data/icons/elevator/154/elevator-user-man-ui-round-login-1024.png',
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
                  value={username}
                />
                <TextInput
                  placeholder="Lokasi"
                  style={styles.inputText}
                  onChangeText={(v) => setLokasi(v)}
                  value={lokasi}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.inputText}
                  onChangeText={(v) => setEmail(v)}
                  value={email}
                />
                <TextInput
                  placeholder="Phone Number"
                  style={styles.inputText}
                  onChangeText={(v) => setPhoneNumber(v)}
                  value={phoneNumber}
                />
                <TextInput
                  placeholder="Bio"
                  style={styles.inputTextarea}
                  onChangeText={(v) => setBio(v)}
                  value={bio}
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
        </View>
      ))}
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
