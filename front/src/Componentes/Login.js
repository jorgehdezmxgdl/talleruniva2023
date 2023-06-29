import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Snackbar from '@mui/material/Snackbar';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export default function Login(props) {
  const [open,  setOpen]  = React.useState(false);
  const [state, setState] = React.useState({
     open_e: false,
     vertical: 'top',
     horizontal: 'right',
  });
  const { vertical, horizontal, open_e } = state;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open_e: false });
  };

  const handleSubmit = () => {
    props.ftCambio();
    /*
     
    if (!email.match(/.+@.+\..+/)) {
       setState({ ...state, open_e: true });
    }
    */
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrada al sistema
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs justifyContent="center">
              <Link href="#" variant="body2" onClick={handleClickOpen}>
                ¿Olvidaste tu acceso?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Recuperar Password"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={open_e} autoHideDuration={6000}  anchorOrigin={{ vertical, horizontal }} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: "100%" }}>
           El correo electrónico no es válido.
        </Alert>
      </Snackbar>
    </Container>
  );
}
