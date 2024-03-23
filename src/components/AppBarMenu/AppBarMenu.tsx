import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import logoIntibiome from "src/assets/images/small/logoIntibiome.png";
import iconClose from "src/assets/images/small/icon_close.png";
import { Fade, Slide, SvgIcon, TextField, Typography } from "@mui/material";
import { sxStyles } from "./AppBarMenu.style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/SearchRounded";
import MenuIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";

const navItemsMobile = [
  "Missão e valores",
  "Tecnologias envolvidas",
  "todos os produtos",
  "intibiome wellness",
  "intibiome active",
  "intibiome agecare",
  "article 1",
  "article 2",
  "faq",
  "contact-nos",
  "trabalhe conosco",
];

const navItemsWeb = [
  "Sobre nós",
  "Nossos produtos",
  "Saúde intima",
  "Contate-nos",
];

const navWebMobileItems = [...navItemsMobile, ...navItemsWeb].filter(function (
  element,
  index
) {
  return [...navItemsMobile, ...navItemsWeb].indexOf(element) === index;
});

const AppBarMenu: React.FC<{ isHome: boolean }> = ({ isHome }) => {
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
            {mobileOpen ? (
              <CloseIcon sx={sxStyles.menuIcon} color="primary" />
            ) : (
              <MenuIcon sx={sxStyles.menuIcon} color="primary" />
            )}
          </IconButton>
          <Box component="img" alt="Logo intibiome" src={logoIntibiome} />
          <Box sx={sxStyles.searchIcon}>
            <SearchIcon color="primary" sx={{ marginRight: 2 }} />

            {isHome ? (
              <a href="/login">
                <AccountCircleIcon color="primary" />
              </a>
            ) : (
              <Box />
            )}
          </Box>
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
          <TextField
            sx={sxStyles.inputSearch}
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
