import { Redirect } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function Page() {
  return (
    <Provider store={store}>
      <Redirect href={'/signin'} />
    </Provider>
  );
  // return <Redirect href={"/(tabs)/home"} />;
}
