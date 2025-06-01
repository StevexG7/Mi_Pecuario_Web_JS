import { Box, Button, TextField, Typography} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Login = () => {
  return (
    <Box 
      sx={{ 
      backgroundColor: 'primary.main', 
      color:'primary.contrastText',
      Button: 'primary.button', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      gap: 4,
      p : 3,
      }}>

      <Typography variant="h4" sx={{ mb: 3 }}> {/* Margen inferior */}
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
        color="primary.button"
        variant="contained" 
        startIcon={<ArrowForwardIcon />}
        sx={{
          width: '200px', 
          py: 1.5,
        }}
      >
        Iniciar
      </Button>
    </Box>
  );
};

export default Login;