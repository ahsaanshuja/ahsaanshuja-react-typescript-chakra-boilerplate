import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const myTheme = extendTheme({
  config,
  styles: {
    global: ({ colorMode }: { colorMode: 'light' | 'dark' }) =>
      ({
        body: {
          bg: colorMode === 'dark' ? 'gray.800' : 'neutral.50',
          color: colorMode === 'dark' ? 'white' : '#1F2937',
        },
        '@media screen and (max-width: 480px)': {
          body: {
            bg: colorMode === 'dark' ? 'gray.800' : 'neutral.50',
            color: colorMode === 'dark' ? 'white' : '#1F2937',
          },
        },
      }) as Record<string, any>,
  },
  colors: {
    light: {
      background: 'neutral.50',
      text: '#374151',
    },
    dark: {
      background: 'gray.800',
      text: '#FFFFFF',
    },
  },
});

export default myTheme;

export type Theme = typeof myTheme;
