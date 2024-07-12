import { FC, ReactNode } from 'react';
import MyChakraProvider from './ChakraProvider';
import TanStackQueryProvider from './TanStackQueryProvider';

// Add all of your providers here e.g context etc
const AppProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <TanStackQueryProvider>
    <MyChakraProvider>{children}</MyChakraProvider>
  </TanStackQueryProvider>
);

export default AppProviders;
