import React from 'react';
import { Dialog, Portal, Text, Button } from 'react-native-paper';
import { useGlobalContext } from '../context/Globals';

export default function Error() {
  const ctx = useGlobalContext();
  if (ctx?.error) {
    const [error, setError] = ctx.error;
    return (
      <Portal>
        <Dialog visible={!!error}>
          <Dialog.Title>Something went wrong</Dialog.Title>
          <Dialog.Content>
            <Text>Please try again</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setError(null)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
  return null;
}
