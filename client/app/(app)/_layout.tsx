import { Redirect, Stack } from 'expo-router';
import { Text } from 'react-native-paper';
import { useSession } from '../../context/Auth';
import { Menu } from '../../components/menu';
import { Cart } from '../../components/cart';

export default function AppLayout() {
  const { getAccessToken, isLoading } = useSession();
  const accessToken = getAccessToken();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!accessToken) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href='/login' />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: { color: '#fff' },
        headerStyle: { backgroundColor: 'rgb(103, 80, 164)' },
        headerLeft: Menu,
        headerRight: Cart,
      }}
    />
  );
}
