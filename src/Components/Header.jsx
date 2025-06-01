import { 
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Grid,
  Paper,
  Stack,
  Chip
} from '@mui/material';

const Header = () => {
  return (
    <Paper elevation={3} sx={{ mb: 3, borderRadius: 2 }}>
      <AppBar 
        position="static" 
        color="transparent" 
        elevation={0}
        sx={{ 
          borderRadius: 2,
          background: 'linear-gradient(135deg, #1e88e5 0%, #0d47a1 100%)',
          color: 'white'
        }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bienvenido(a)
              </Typography>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                Camila Perez
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Avatar 
                sx={{ 
                  width: 56, 
                  height: 56,
                  bgcolor: 'rgba(255,255,255,0.2)',
                  border: '2px solid white'
                }}
              >
                CP
              </Avatar>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
          Actividades diarias
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={4}>
            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Stack spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  Cumplidas
                </Typography>
                <Chip 
                  label="20/30" 
                  color="success"
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}
                />
              </Stack>
            </Paper>
          </Grid>
          
          <Grid item xs={4}>
            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Stack spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  Revisiones
                </Typography>
                <Chip 
                  label="10/30" 
                  color="warning"
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}
                />
              </Stack>
            </Paper>
          </Grid>
          
          <Grid item xs={4}>
            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Stack spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  Inventario
                </Typography>
                <Chip 
                  label="5/30" 
                  color="error"
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}
                />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Header;