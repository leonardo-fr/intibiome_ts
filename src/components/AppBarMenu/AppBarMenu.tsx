import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import iconMenu from "src/assets/icons/icon_menu.svg";
import logoIntibiome from "src/assets/images/small/logoIntibiome.png";
import iconClose from "src/assets/images/small/icon_close.png";
import iconSearch from "src/assets/icons/icon_search.svg";
import { Fade, Slide, TextField, Typography } from "@mui/material";
import { sxStyles } from "./AppBarMenu.style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const navWebMobileItems = [...navItemsMobile, ...navItemsWeb].filter(function (
  element,
  index
) {
  return [...navItemsMobile, ...navItemsWeb].indexOf(element) === index;
});

const AppBarMenu: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [iconSearchOpen, setIconSearchOpen] = React.useState(false);
  const [inputSearch, setInputSearch] = React.useState("");
  const [allNavItems, setAllNavItems] = React.useState<string[]>();

  const filteredItems =
    inputSearch.length > 0
      ? navWebMobileItems.filter((element) => element.includes(inputSearch))
      : navWebMobileItems.filter((element) => element.includes(""));

  const handleMenu = () => {
    if (iconSearchOpen === true) handleSearch();
    setMobileOpen((prevState) => !prevState);
  };
  const handleSearch = () => {
    if (mobileOpen === true) handleMenu();
    setIconSearchOpen((prevState) => !prevState);
  };

  const onInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
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
            onClick={handleSearch}
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
                <ListItemButton onClick={handleMenu} sx={sxStyles.listItem}>
                  <Typography variant="h4">&emsp;&emsp;{item}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Slide>
      <Fade in={iconSearchOpen}>
        <Box position="absolute" sx={sxStyles.fadeSearch}>
          <Divider />
          <TextField sx={{
            background: "white",
            borderRadius: "0.5rem",
            border: "1px solid grey",
            marginTop: "1rem",
            width: "40vw",
          }}
            value={inputSearch}
            onChange={onInputSearchChange}
          ></TextField>
          <List>
            {filteredItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={handleSearch}>
                  <Typography variant="h4">&emsp;&emsp;{item}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Fade>
      <Box position="static" sx={sxStyles.appBarMenu}>
        {navItemsWeb.map((item) => (
          <Box sx={sxStyles.navBarItem}>
            <Typography variant="h6">{item}</Typography>
            <ExpandMoreIcon />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AppBarMenu;
