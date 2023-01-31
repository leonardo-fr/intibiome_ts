import { Box, Paper, Typography } from "@mui/material";
import productOne from "../../assets/images/small/product_one.png";
import productTwo from "../../assets/images/small/product_two.png";
import productThree from "../../assets/images/small/product_three.png";
import { sxStyles } from "./Products.styles";

const Products: React.FC = () => {
  return (
    <Box>
      <Typography sx={{ padding: "5rem 2.5rem" }} variant="h1">
        our products
      </Typography>
      <Box sx={sxStyles.products}>
        <Paper sx={{ borderRadius: "1rem" }}>
          <Box
            sx={sxStyles.cardProducts}
            component="img"
            alt="product image"
            src={productOne}
          />
          <Typography sx={{ padding: "24px", width: "18.25rem" }} variant="h5">
            intibiome wellness daily intimate wash
          </Typography>
          <Box
            sx={{
              backgroundColor: "#389CD6",
              height: "73px",
              borderRadius: "0 0 1rem 1rem",
            }}
          >
            <Typography sx={{ paddingTop: "1rem" }} variant="h2">
              wellness
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ borderRadius: "1rem" }}>
          <Box
            sx={sxStyles.cardProducts}
            component="img"
            alt="product image"
            src={productTwo}
          />
          <Typography sx={{ padding: "24px", width: "18.75rem" }} variant="h5">
            intibiome active extra protection intimate wash
          </Typography>
          <Box sx={sxStyles.productActive}>
            <Typography sx={{ paddingTop: "1rem" }} variant="h2">
              active
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ borderRadius: "1rem" }}>
          <Box
            sx={sxStyles.cardProducts}
            component="img"
            alt="product image"
            src={productThree}
          />
          <Typography sx={{ padding: "24px", width: "18rem" }} variant="h5">
            intibiome agecare dryness relief intimate wash
          </Typography>
          <Box
            sx={{
              backgroundColor: "#EE6381",
              height: "4.56rem",
              borderRadius: "0 0 1rem 1rem",
            }}
          >
            <Typography sx={{ paddingTop: "1rem" }} variant="h2">
              agecare
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Products;
