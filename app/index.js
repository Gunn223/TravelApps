import { Redirect } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { useState } from 'react';
import SplashScreen from '../src/components/SplashScreen';
import { View } from 'react-native';

export default function Page() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
    // Lakukan navigasi atau tindakan lain setelah splash screen selesai
  };
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        {isSplashVisible ? <SplashScreen onFinish={handleSplashFinish} /> : <Redirect href={'/signin'} />}
      </View>
    </Provider>
  );
  // return <Redirect href={"/(tabs)/home"} />;
}
