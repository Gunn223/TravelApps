import { Redirect } from 'expo-router';
import { NativeBaseProvider } from 'native-base';

export default function Page() {
  return <Redirect href={'/signin'} />;
  // return <Redirect href={"/(tabs)/home"} />;
}
