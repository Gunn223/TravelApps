import { Redirect } from 'expo-router';

export default function Page() {
  return <Redirect href={'/signin'} />;
  // return <Redirect href={"/(tabs)/home"} />;
}