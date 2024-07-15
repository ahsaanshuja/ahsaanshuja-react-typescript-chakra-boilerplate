import { FC, ReactNode } from 'react';
import MyChakraProvider from './ChakraProvider/ChakraProvider';

const AppProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <MyChakraProvider>
    {/* Add all of your providers here e.g context etc */}
    {children}
  </MyChakraProvider>
);

export default AppProviders;
