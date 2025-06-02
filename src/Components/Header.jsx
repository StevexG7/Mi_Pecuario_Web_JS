import { Box, Typography, Paper } from '@mui/material';

const CustomHeader = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: '0px 0px 200px 60px',
        backgroundColor: 'primary.main',
        padding: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    > 

      <Box display="flex" alignItems="center">
        <Typography variant="h6" sx={{ mr: 2 }}>
          Bienvenido(a)
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          Camila Perez
        </Typography>
      </Box>
    </Paper>
  );
};

export default CustomHeader;