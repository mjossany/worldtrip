import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#F5F8FA',
      '200': '#DADADA',
      '400': '#999999',
      '600': '#47585b',
    },
    yellow: {
      '500': '#FFBA08',
    },
  },
  breakpoints: {
    sm: '375px',
    lg: '1440px',
    '2xl': '1536px',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  }
})