import { Box, Paper, Typography } from "@mui/material";
import productOne from "src/assets/images/small/product_one.png";
import productTwo from "src/assets/images/small/product_two.png";
import productThree from "src/assets/images/small/product_three.png";
import { sxStyles } from "./Products.styles";

const Products: React.FC = () => {
  return (
    <Box>
      <Typography sx={sxStyles.ourProducts} variant="h1">
        our products
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
            intibiome wellness daily intimate wash
          </Typography>
          <Box sx={sxStyles.productWellnes}>
            <Typography variant="h2">
              wellness
            </Typography>
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
            intibiome active extra protection intimate wash
          </Typography>
          <Box sx={sxStyles.productActive}>
            <Typography variant="h2">
              active
            </Typography>
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
            intibiome agecare dryness relief intimate wash
          </Typography>
          <Box sx={sxStyles.productAgecare}>
            <Typography variant="h2">
              agecare
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Products;
