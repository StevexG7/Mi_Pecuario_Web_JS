import { Box, Button, TextField, Typography} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from '../assets/Logo.svg';
import Type from '../assets/Type.svg';

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
          width: 150,
          height:150,
          mb: 1,
          borderRadius: '50%', // opcional
        }}
      />

      <Box
        component="img"
        src={Type}
        alt="Type Pecuario"
        sx={{
          width: 400,
          height: 150,
          mb: 2,
        }}
      />
      
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
        id="Email"
        label="Correo Electrónico" 
        variant="outlined" 
        type="email"
        sx={{ 
          width: '300px',
          mb: 3,
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
          backgroundColor: '#FDCB48', 
          color: '#2B3D09',            
          borderRadius: '30px',        
          textTransform: 'none',       
          fontWeight: 'bold',          
          '&:hover': {
            backgroundColor: '#FA980E',
          },
        }}
>
  Iniciar
</Button>

<Typography
  variant="body2"
  sx={{
    mt: 1,
    color: 'primary.text', 
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