import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { GetUser } from '../../services/GetData';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login } from '../../services/PostData';
const index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [inputUser, SetinputUser] = useState({
    email: '',
    password: '',
  });
  // console.log(inputUser);
  // console.log("email",email);
  // console.log("pw",password);
  // console.log(inputUser);
  // useEffect(() => {
  //   GetUser((data: []) => {
  //     if (data.length > 0) {
  //       setData(data);
  //     }
  //   });
  // }, []);

  // console.log(data);
  useEffect(() => {
    const LoginUser = async () => {
      try {
        const DataLogin = await Login(inputUser, (errorMessage: any) => {
          if (errorMessage) {
            // setErrorMessage(errorMessage.message);
            // kondisi terlihat sebelumdi eksekusi
            // handle login error
          }
        });
        setData(DataLogin);
      } catch (error) {
        console.log('login err', error);
      }
    };
    // perlu 2 kali click login baru bisa masuk menu utama ?
    LoginUser();
  }, [inputUser]);
  useEffect(() => {
    const SesionCek = async () => {
      try {
        const sesion = await AsyncStorage.getItem('token');

        // Konversi durasi ke milidetik (ms)
        const durationInDays = 3;
        const durationInMilliseconds = durationInDays * 24 * 60 * 60 * 1000;
        if (sesion) {
          router.replace('/(tabs)/home');
          setTimeout(() => {
            AsyncStorage.removeItem('token');
            AsyncStorage.removeItem('id');
            console.log('Token and id removed after 3 days');
          }, durationInMilliseconds);
        }
      } catch (error) {
        console.log('Error di session', error);
      }
    };
    SesionCek();
    // membuat sesi yang  di gunkaan untuk login
  }, []);
  useEffect(() => {
    const RouteHome = async () => {
      if (data && data.length > 0) {
        const { token, user } = data[0];
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('id', user.id_user.toString());
        router.replace('/(tabs)/home');
      }
    };
    RouteHome();
  }, [data]);
  const handleLogin = async () => {
    console.log('click');
    if (!email && !password) {
      setErrorMessage('Email and password are required');
    } else if (!email) {
      setErrorMessage('Email is required');
    } else if (!password) {
      setErrorMessage('Password is required');
    }

    SetinputUser({
      email: email,
      password: password,
    });

    // Atur timeout untuk menghilangkan pesan kesalahan setelah 2 detik
    setTimeout(() => {
      setErrorMessage('');
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Membalikkan nilai state untuk menampilkan/sembunyikan password
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.header}>Sign In</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />

      <View style={styles.passwordInput}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.passwordTextInput}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.passwordToggle}>
          <Image
            source={showPassword ? require('../../assets/images/show.png') : require('../../assets/images/hide.png')}
            style={styles.passwordToggleIcon}
          />
        </TouchableOpacity>
      </View>

      {errorMessage ? ( // Tampilkan pesan kesalahan jika ada
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleLogin}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Not a user?
        <Link
          href="/signup"
          style={styles.loginLink}>
          SIGN UP
        </Link>
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 118,
    height: 46,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  submitButton: {
    width: '100%',
    padding: 12,
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  loginText: {
    fontSize: 14,
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
  passwordIcon: {
    width: 10,
    height: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  passwordTextInput: {
    flex: 1,
  },
  passwordToggle: {
    padding: 10,
  },
  passwordToggleIcon: {
    width: 24,
    height: 24,
  },
});
