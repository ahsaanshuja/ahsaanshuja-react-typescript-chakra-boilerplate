import { HStack, Text } from '@chakra-ui/react';
import AppProviders from './providers';
function App() {
  return (
    <AppProviders>
      <HStack justifyContent={'center'} h='100vh' w='100wv'>
        <Text fontSize={'6xl'}>
          Welcome to Chakra React Boiler boilerplate with webpack
        </Text>{' '}
      </HStack>
    </AppProviders>
  );
}

export default App;
