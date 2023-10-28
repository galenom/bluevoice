import React from 'react';
import { Divider, IconButton, Menu as RNPMenu } from 'react-native-paper';
import { useGlobalContext } from '../context/Globals';
import { useRouter } from 'expo-router';

export const Menu = () => {
  const { replace, push } = useRouter();
  const {
    menu: { visible, open, close },
  } = useGlobalContext();
  return (
    <RNPMenu
      visible={visible}
      onDismiss={close}
      anchor={<IconButton mode='contained' icon='menu' onPress={open} />}
    >
      <RNPMenu.Item onPress={() => push('/menu')} title='Menu' />
      <RNPMenu.Item onPress={() => push('/orders')} title='Orders' />
      <RNPMenu.Item onPress={() => push('/cart')} title='Cart' />
      <Divider />
      <RNPMenu.Item onPress={() => replace('/login')} title='Logout' />
    </RNPMenu>
  );
};
