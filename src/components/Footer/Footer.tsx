import { Box, Divider, Typography } from "@mui/material";
import iconInstagram from "../../assets/images/small/icon_instagram.png";
import ulabs from "../../assets/images/small/ulabs.png";
import { sxStyles } from "./Footer.style";

const Footer: React.FC = () => {
  const iconsFooter = [
    <Box
      // sx={{ paddingTop: "2.68rem" }}
      component="img"
      alt="instagram icon"
      src={iconInstagram}
    />,
    <Box
      // sx={{ paddingTop: "6.25rem", marginBottom: "4.31rem" }}
      component="img"
      alt="logo ulabs"
      src={ulabs}
    />,
  ];

  return (
    <Box sx={{
    backgroundColor: "#389CD6",}}>
      <Box sx={sxStyles.footer}>
        <Typography sx={{}} variant="h4">
          contact us
        </Typography>
        <Divider sx={sxStyles.divider} />
        <Typography variant="h4">faq</Typography>
        <Divider sx={sxStyles.divider} />
        <Typography variant="h4">site map</Typography>
        <Divider sx={sxStyles.divider} />
        <Typography variant="h4">privacy policy</Typography>
        <Divider sx={sxStyles.divider} />
        <Typography variant="h4">cookies policy</Typography>
        <Divider sx={sxStyles.divider} />
        <Typography variant="h4">legal notice</Typography>
      </Box>
        <Box sx={sxStyles.iconsFooter}>
          {iconsFooter.map((item) => (
            <Box sx={sxStyles.iconsFooterMobile}>{item}</Box>
          ))}
          {iconsFooter.reverse().map((item) => (
            <Box sx={sxStyles.iconsFooterWeb}>{item}</Box>
          ))}
        </Box>
    </Box>
  );
};

export default Footer;
