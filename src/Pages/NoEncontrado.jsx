import { Box, Typography } from "@mui/material";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";

const NoEncontrado = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: "primary.text",
          textAlign: "center",
          marginTop: 5,
        }}
      >
        Página No Encontrada
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "primary.text",
          textAlign: "center",
          marginTop: 2,
        }}
      >
        Lo sentimos, la página que buscas no existe{" "}
        <SentimentVeryDissatisfiedOutlinedIcon 
        sx={{ width: 30, height: 30, verticalAlign: "middle" }}
        />
      </Typography>
    </Box>
  );
};

export default NoEncontrado;
