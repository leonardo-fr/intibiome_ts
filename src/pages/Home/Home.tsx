import { Box, Typography } from "@mui/material";
import bannerMobile from "src/assets/images/small/banner_mobile.png";
import bannerMobileTwo from "src/assets/images/small/banner_mobile_two.png";
import bannerWeb from "src/assets/images/small/banner_web.png";
import bannerWebTwo from "src/assets/images/small/banner_web_two.png";
import AppBarMenu from "src/components/AppBarMenu/AppBarMenu";
import Footer from "src/components/Footer/Footer";
import Products from "src/components/Products/Products";
import Discoveries from "src/components/Discoveries/Discoveries";
import { sxStyles } from "./Home.style";

const Home: React.FC = () => {
  return (
    <Box className="App" sx={sxStyles.home}>
      <AppBarMenu />
      <Box>
        <Box
          sx={sxStyles.bannerMobile}
          component="img"
          alt="Logo"
          src={bannerMobile}
        />
        <Box
          sx={sxStyles.bannerWeb}
          component="img"
          alt="Logo"
          src={bannerWeb}
        />
      </Box>
      <Box sx={{ padding: "1.125rem" }}>
        <Typography sx={sxStyles.titles} variant="h1">
          we're here to help
        </Typography>
        <Typography sx={{ paddingBottom: "2.5rem" }} variant="h3">
          <p>
            When it comes to caring for our most intimate areas, we’ve lost our
            connection.
          </p>
          <br />
          <p>
            Embarrassed, unwilling, or unable to communicate with others, we’re
            needlessly neglecting the parts of our bodies that need it most.
          </p>
          <br />
          <p>
            We’re here to help. Providing you with the expertise, knowledge and
            products you need to feel confident in your personal care.
          </p>
        </Typography>
        <Box sx={sxStyles.iconsPromote} />
        <Typography sx={sxStyles.titles} variant="h1">
          whatever your age. whatever your lifestyle. whatever your interests.
        </Typography>
        <Typography variant="h3">
          <p>
            Co-created with gynaecologists, our revolutionary products have been
            expertly developed to support your intimate microbiome and pH
            balance, and strengthen overall natural health.
          </p>
          <br />
          <p>
            As the experts in intimate hygiene, we want to bring discussion
            about intimate wellness care out of the dark and demystify the
            taboos that surround it.
          </p>
        </Typography>
      </Box>
      <Box>
        <Products />
      </Box>
      <Box sx={{ paddingTop: "4rem" }}>
        <Box
          sx={sxStyles.bannerMobile}
          component="img"
          alt="Logo"
          src={bannerMobileTwo}
        />
        <Box
          sx={sxStyles.bannerWeb}
          component="img"
          alt="Logo"
          src={bannerWebTwo}
        />
      </Box>
      <Box>
        <Discoveries />
        <Box sx={sxStyles.buttonSeeMore}>
          <Typography variant="button">see more</Typography>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
