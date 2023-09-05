import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";

export default function SingIn() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#102444",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#102444",
            marginTop: "5rem",
          }}
        >
          <strong>Вход</strong> / Регистрация
        </Typography>
        <Stack justifyContent="center" alignItems="center" spacing={5}>
          <TextField
            id="standard-basic"
            label="Имейл"
            variant="standard"
            color="primary"
            sx={{ color: "primary", width: "30rem" }}
          />
          <TextField
            id="standard-basic"
            label="Парола"
            variant="standard"
            color="primary"
            sx={{ color: "primary", width: "30rem" }}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={25}
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Запомни ме" />
          </FormGroup>
          <Link href="#" underline="none">
            Забравена парола?
          </Link>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          sx={{
            marginTop: '1rem'
          }}
        >
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ borderRadius: "2rem" }}
          >
            Влез с Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ borderRadius: "2rem" }}
          >
            Влез с Facebook
          </Button>
        </Stack>
        <Stack  justifyContent="center"
          alignItems="center"
          sx={{marginTop: '2rem'}}>
            
            <Button variant="contained" sx={{
            borderRadius: '2rem', padding: '5px 40px'
            
        }}>Вход</Button>
        </Stack>
        
      </ThemeProvider>
    </div>
  );
}
