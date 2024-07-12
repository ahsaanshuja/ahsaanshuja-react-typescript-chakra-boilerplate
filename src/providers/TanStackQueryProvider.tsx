import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, ReactNode } from 'react';
import { queryClient } from '../App';

const TanStackQueryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {process.env.isDev ? <ReactQueryDevtools initialIsOpen /> : undefined}
      {children}
    </QueryClientProvider>
  );
};

export default TanStackQueryProvider;
