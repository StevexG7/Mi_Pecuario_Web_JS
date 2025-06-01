import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F0E8C9', // Main Color
      text: '#2B3D09', // Text Color
      contrastText: '#2B3D09', // Contrast Text Color
      button: '#FDCB48', // Button Color cambiado por sofia
    },
    secondary: {
      main: '#ffffff', // Secondary Color
    },
  }
});

export default theme;