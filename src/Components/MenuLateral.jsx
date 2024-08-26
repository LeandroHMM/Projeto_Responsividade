import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Button,
  ListSubheader,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import {
  AccountCircle,
  AddCircle,
  History,
  VideoLibrary,
} from "@mui/icons-material";

const drawerWidth = 240;
const MenuLateral = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  if (isMdDown) {
    return null;
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem disablePadding sx={{ padding: "1px" }}>
            <ListItemButton>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText primary={"Início"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ padding: "1px" }}>
            <ListItemButton>
              <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
              <ListItemText primary={"Em alta"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ padding: "1px" }}>
            <ListItemButton>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText primary={"Inscrições"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem disablePadding sx={{ padding: "1px" }}>
            <ListItemButton>
              <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
              <ListItemText primary={"Biblioteca"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ padding: "1px" }}>
            <ListItemButton>
              <ListItemIcon>{<History />}</ListItemIcon>
              <ListItemText primary={"Biblioteca"} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        <Box p={3}>
          <Typography variant="body1">
            Faça Login para curtir vídeos, comentar e se inscrever.
          </Typography>
        </Box>

        <Box mt={2} mb={4}>
          <Button
            sx={{ marginLeft: 7 }}
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Login
          </Button>
        </Box>

        <Divider />

        <List>
          <ListSubheader
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            O Melhor do youtube
          </ListSubheader>

          <ListItem disablePadding sx={{ padding: "1px" }}>
            <ListItemButton>
              <ListItemIcon>{<AddCircle />}</ListItemIcon>
              <ListItemText primary={"Música"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ padding: "1px" }}>
            <ListItemButton>
              <ListItemIcon>{<AddCircle />}</ListItemIcon>
              <ListItemText primary={"Esportes"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ padding: "1px" }}>
            <ListItemButton>
              <ListItemIcon>{<AddCircle />}</ListItemIcon>
              <ListItemText primary={"Jogos"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ padding: "1px" }}>
            <ListItemButton>
              <ListItemIcon>{<AddCircle />}</ListItemIcon>
              <ListItemText primary={"Filmes"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
export default MenuLateral;
