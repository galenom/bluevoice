import React from 'react';
import { Divider, IconButton, Menu as RNPMenu } from 'react-native-paper';
import { useGlobalContext } from '../context/Globals';
import { useRouter } from 'expo-router';
import { useAuthContext } from '../context/Auth';

export const Menu = () => {
  const { replace, push } = useRouter();
  const {
    menu: { visible, open, close },
  } = useGlobalContext();

  const { clearAccessToken } = useAuthContext();

  return (
    <RNPMenu
      visible={visible}
      onDismiss={close}
      anchor={<IconButton mode='contained' icon='menu' onPress={open} />}
    >
      <RNPMenu.Item onPress={() => push('/menu')} title='Menu' />
      <RNPMenu.Item onPress={() => push('/orders')} title='Orders' />
      <Divider />
      <RNPMenu.Item
        onPress={async () => {
          await clearAccessToken();
          replace('/login');
        }}
        title='Logout'
      />
    </RNPMenu>
  );
};
