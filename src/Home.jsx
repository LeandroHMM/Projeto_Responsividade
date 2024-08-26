import { AppBar, Box, Button, IconButton, Switch, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuLateral from "./components/MenuLateral";
import CenterGrid from "./Components/CenterGrid";
import { useTheme } from "@emotion/react";
import PropTypes from 'prop-types';

function Home({ darkMode, setDarkMode }) {
    const theme = useTheme();

    const handleDarkModeToggle = () => {
        setDarkMode(prevMode => !prevMode);
    };


  return (
    <Box sx={{ height: "100vh" }}>
      <AppBar color="inherit" sx={{ zIndex: 1500, boxShadow: "none", marginRight: 4, marginLeft: 4 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={theme.palette.mode != 'dark' ?  "/images/preto.png" : "/public/images/branco.png"} alt="logo" height="30px" />

          <Switch value={darkMode} onChange={handleDarkModeToggle} />

          <Button
            variant="outlined"
            sx={{
              marginLeft: "auto",
              borderRadius: 12,
              backgroundColor: "#1A73E8",
              color: "white",
            }}
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display='flex' paddingTop={4} >
        <MenuLateral />

        <CenterGrid />
      </Box>
    </Box>
  );
}
    Home.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
  };

export default Home;
