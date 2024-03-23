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
      <AppBarMenu isHome={true} />
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
          Nós estamos aqui para ajudar!
        </Typography>
        <Typography sx={sxStyles.help} variant="h3">
          <p>
            Quando se trata de cuidar das nossas áreas mais íntimas, perdemos a
            conexão
          </p>
          <br />
          <p>
            Envergonhados, sem vontade ou incapazes de nos comunicarmos com os
            outros, negligenciamos desnecessariamente as partes do nosso corpo
            que mais precisam.
          </p>
          <br />
          <p>
            Nós estamos aqui para ajudar. Fornecendo a você a experiência, o
            conhecimento e os produtos que você precisa para se sentir confiante
            em seus cuidados pessoais.
          </p>
        </Typography>
        <Box sx={sxStyles.iconsPromote} />
        <Typography sx={sxStyles.titles} variant="h1">
          seja qual for a sua idade. seja qual for o seu estilo de vida.
          quaisquer que sejam seus interesses.
        </Typography>
        <Typography sx={sxStyles.cocreated} variant="h3">
          <p>
            Criados em colaboração com ginecologistas, os nossos produtos
            revolucionários foram habilmente desenvolvidos para apoiar o seu
            microbioma íntimo e o equilíbrio do pH e fortalecer a saúde natural
            geral.
          </p>
          <br />
          <p>
            Como especialistas em higiene íntima, queremos trazer do escuro a
            discussão sobre os cuidados com o bem-estar íntimo e desmistificar
            os tabus que os cercam.
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
          <Typography variant="button">veja mais</Typography>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
