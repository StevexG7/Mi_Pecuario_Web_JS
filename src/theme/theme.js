import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F0E8C9', // Main Color
      text: '#141E46', // Text Color
      contrastText: '#141E46', // Contrast Text Color
      button: '#FFCA45', // Button Color
    },
    secondary: {
      main: '#ffffff', // Secondary Color
    },
  }
});

export default theme;