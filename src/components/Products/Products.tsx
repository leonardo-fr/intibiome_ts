import { Box, Paper, Typography } from "@mui/material";
import productOne from "src/assets/images/small/product_one.png";
import productTwo from "src/assets/images/small/product_two.png";
import productThree from "src/assets/images/small/product_three.png";
import { sxStyles } from "./Products.styles";

const Products: React.FC = () => {
  return (
    <Box>
      <Typography sx={sxStyles.ourProducts} variant="h1">
        Nossos produtos
      </Typography>
      <Box sx={sxStyles.products}>
        <Paper sx={sxStyles.paper}>
          <Box
            sx={sxStyles.cardProducts}
            component="img"
            alt="product image"
            src={productOne}
          />
          <Typography sx={sxStyles.legends} variant="h5">
            Intibiome wellness lavagem íntima diária
          </Typography>
          <Box sx={sxStyles.productWellnes}>
            <Typography variant="h2">Wellness</Typography>
          </Box>
        </Paper>
        <Paper sx={sxStyles.paper}>
          <Box
            sx={sxStyles.cardProducts}
            component="img"
            alt="product image"
            src={productTwo}
          />
          <Typography sx={sxStyles.legends} variant="h5">
            Lavagem íntima com proteção extra ativa
          </Typography>
          <Box sx={sxStyles.productActive}>
            <Typography variant="h2">Active</Typography>
          </Box>
        </Paper>
        <Paper sx={sxStyles.paper}>
          <Box
            sx={sxStyles.cardProducts}
            component="img"
            alt="product image"
            src={productThree}
          />
          <Typography sx={sxStyles.legends} variant="h5">
            Sabonete íntimo para aliviar o ressecamento
          </Typography>
          <Box sx={sxStyles.productAgecare}>
            <Typography variant="h2">Agecare</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Products;
