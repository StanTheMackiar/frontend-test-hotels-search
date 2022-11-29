import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Public as PublicIcon } from '@mui/icons-material';


export const NavBar = () => (
  
  <AppBar>
    <Toolbar>

      <Box sx={{flex: 1}} />

      <Box display='flex' flexDirection='row' marginRight={5} sx={{cursor: 'pointer'}}>
        <PublicIcon sx={{mr: 1}} />
        <Typography>Español</Typography>
      </Box>

      <Typography sx={{cursor: 'pointer'}}>Iniciar sesión</Typography>

    </Toolbar>
  </AppBar>
);

