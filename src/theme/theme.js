import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F0E8C9', // Main Color
      text: '#141E46', // Text Color
      contrastText: '#2B3D09', // Contrast Text Color
      button: '#FDCB48', // Button Color cambiado por sofia
    },
    secondary: {
      main: '#B0A780',
      card_1: '#F0E8C9',
      card_2: '#FAF6E7',
      card_3: '#FAF8F1',
    },
  }
});

export default theme;