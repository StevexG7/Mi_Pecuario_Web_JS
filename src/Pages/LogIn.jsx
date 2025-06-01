import { Box, Button, TextField, Typography} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from '../assets/Logo.svg'; // Asegúrate de que la ruta sea correcta

const Login = () => {
  return (
<    Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 3,
        p: 3,
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logo}
        alt="Logo Pecuario"
        sx={{
          width: 80,
          height: 80,
          mb: 1,
          borderRadius: '50%', // opcional
        }}
      />

      {/* Título */}
      <Typography
      variant="h4"
      sx={{
      mb: 3,
      fontFamily: '"Lobster", cursive',
      color: 'primary.text'}}>
         Pecuario
      </Typography>

      
      <TextField 
        color="primary.text"
        id="Username"
        label="Nombre De Usuario" 
        variant="outlined" 
        sx={{  
          width: '300px',
          mb: 2
        }} 
      />
      
      <TextField 
        color="primary.text"
        id="password"
        label="Contraseña" 
        variant="outlined" 
        type="password"
        sx={{ 
          width: '300px',
          mb: 3,
        }} 
      />
      
      <Button
        variant="contained"
        startIcon={<ArrowForwardIcon />}
        sx={{
          width: '100%',
          maxWidth: '300px',
          py: 1.5,
          backgroundColor: '#FDCB48', // Color personalizado (verde)
          color: '#2B3D09',            // Color del texto (blanco)
          borderRadius: '30px',        // Bordes redondeados
          textTransform: 'none',       // Para que el texto no esté en mayúsculas
          fontWeight: 'bold',          // Texto más destacado
          '&:hover': {
            backgroundColor: '#FA980E', // Color al pasar el mouse
          },
        }}
>
  Iniciar
</Button>

<Typography
  variant="body2"
  sx={{
    mt: 2, // Margen superior
    color: 'primary.contrastText', 
    cursor: 'pointer',
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  }}
>
  ¿Olvidaste tu contraseña?
</Typography>

    </Box>
  );
};

export default Login;