import { ChakraProvider } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import myTheme from '../utils/theme';

const MyChakraProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ChakraProvider theme={myTheme}>{children}</ChakraProvider>;
};

export default MyChakraProvider;
