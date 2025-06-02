import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  Grid,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import InboxIcon from '@mui/icons-material/Inbox';

const card = () => {
  return (
    <Box>
      <Typography sx={{ color: "primary.text", mt: 2, ml: 4, opacity: 0.7 }}>
        Actividades Diarias
      </Typography>

      <Grid container spacing={3} sx={{ padding: "30px" }}>
        <Grid item>
          <Card sx={{ maxWidth: 150 }}>
            <CardActionArea>
              <CardContent sx={{ backgroundColor: "secondary.card_1" }}>
                <CheckIcon
                  sx={{ color: "primary.text", fontSize: 20, mb: 1 }}
                />
                <Typography gutterBottom variant="subtitle1" component="div">
                  Cumplidas
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "primary.text", fontWeight: "bold" }}
                >
                  20/30
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid>
          <Card sx={{ maxWidth: 150 }}>
            <CardActionArea>
              <CardContent sx={{ backgroundColor: "secondary.card_2" }}>
                <InboxIcon
                    sx={{ color: "primary.text", fontSize: 20, mb: 1 }}
                />
                <Typography gutterBottom variant="subtitle1" component="div">
                  Cumplidas
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "primary.text", fontWeight: "bold" }}
                >
                  20/30
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid>
          <Card sx={{ maxWidth: 150 }}>
            <CardActionArea>
              <CardContent sx={{ backgroundColor: "secondary.card_3" }}>
                <InboxIcon
                    sx={{ color: "primary.text", fontSize: 20, mb: 1 }}
                />
                <Typography gutterBottom variant="subtitle1" component="div">
                  Cumplidas
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "primary.text", fontWeight: "bold" }}
                >
                  20/30
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
      
    </Box>
  );
};

export default card;
