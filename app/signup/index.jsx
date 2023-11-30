import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { useEffect } from 'react';
import { Register } from '../../services/PostData';
// import { useDispatch } from 'react-redux';
import { registerReducer } from '../../redux/actions/registerSlice';

const index = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});

  // const dispacth = useDispatch();

  useEffect(() => {
    setData({ username, email, password });
  }, [username, password, email]);
  // console.log(username, email, password);

  const validateEmail = (email) => {
    // Validasi email menggunakan pola regex sederhana
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Validasi password minimal 8 karakter
    return password.length >= 8;
  };

  const handleRegister = () => {
    // Lakukan validasi input email dan password di sini
    if (!email && !password) {
      // Jika tidak ada email dan password
      setErrorMessage('Email and password are required');
    } else if (!email) {
      // Jika tidak ada email
      setErrorMessage('Email is required');
    } else if (!password) {
      // Jika tidak ada password
      setErrorMessage('Password is required');
    } else {
      // Jika valid, navigasikan ke halaman Home

      router.replace('/signin');
    }

    // Atur timeout untuk menghilangkan pesan kesalahan setelah 2 detik
    setTimeout(() => {
      setErrorMessage('');
    }, 1000);

    // dispacth(registerReducer(data));
    Register(data);
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

      <Text style={styles.header}>Sign Up</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
      />

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
        onPress={handleRegister}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already a user?
        <Link
          href="/signin"
          style={styles.loginLink}>
          SIGN IN
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
