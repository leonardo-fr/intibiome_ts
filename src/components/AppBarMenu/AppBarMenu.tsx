import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import iconMenu from "../../assets/icons/icon_menu.svg";
import logoIntibiome from "../../assets/images/small/logoIntibiome.png";
import iconClose from "../../assets/images/small/icon_close.png";
import iconSearch from "../../assets/icons/icon_search.svg";
import { Icon, Slide, Typography } from "@mui/material";
import { sxStyles } from "./AppBarMenu.style";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const navItemsMobile = [
  "brand philosophy",
  "product technology",
  "all products",
  "intibiome wellness",
  "intibiome active",
  "intibiome agecare",
  "article 1",
  "article 2",
  "article 3",
  "faq",
  "contact us",
];

const navItemsWeb = [
  "about us",
  "our products",
  "intimate health",
  "contact us",
];

const AppBarMenu: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMenu = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <AppBar position="static" sx={sxStyles.appBar}>
        <Toolbar sx={sxStyles.toolbar}>
          <IconButton color="inherit" aria-label="menu" onClick={handleMenu}>
            <Box
              sx={sxStyles.menuIcon}
              component="img"
              alt="Menu icon"
              src={mobileOpen ? iconClose : iconMenu}
            />
          </IconButton>
          <Box component="img" alt="Logo intibiome" src={logoIntibiome} />
          <Box
            component="img"
            alt="Logo"
            src={iconSearch}
            sx={sxStyles.searchIcon}
          />
        </Toolbar>
      </AppBar>
      <Slide direction="right" in={mobileOpen}>
        <Box position="absolute" sx={sxStyles.slideMenu}>
          <Divider />
          <List>
            {navItemsMobile.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={handleMenu}
                  sx={{ padding: "2.875rem 0 0 2rem" }}
                >
                  <Typography variant="h4">{item}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Slide>
      <Box position="static" sx={sxStyles.appBarMenu}>
          {navItemsWeb.map((item) => (
            <Box sx={sxStyles.navBarItem}>
              <Typography variant="h6">{item}</Typography>
              <ExpandMoreIcon/>
            </Box>
          ))}
          {/* <List>
            {navItemsWeb.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={handleMenu}
                  sx={{ padding: "2.875rem 0 0 2rem" }}
                >
                  <Typography variant="h4">{item}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
    </Box>
  );
};

export default AppBarMenu;
