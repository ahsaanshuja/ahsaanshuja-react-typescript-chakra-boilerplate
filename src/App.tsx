import { HStack, Text } from '@chakra-ui/react';
import { QueryClient } from '@tanstack/react-query';
import AppProviders from './providers';

export const queryClient = new QueryClient();

function App() {
  return (
    <AppProviders>
      <HStack justifyContent={'center'} h='100vh' w='100wv'>
        <Text fontSize={'6xl'}>Welcome to Chakra React Boiler boilerplate</Text>{' '}
      </HStack>
    </AppProviders>
  );
}

export default App;
