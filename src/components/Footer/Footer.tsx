import { Box, Divider, Typography } from "@mui/material";
import iconInstagram from "src/assets/images/small/icon_instagram.png";
import ulabs from "src/assets/images/small/ulabs.png";
import { sxStyles } from "./Footer.style";

const Footer: React.FC = () => {
  const iconsFooter = [
    <Box component="img" alt="instagram icon" src={iconInstagram} />,
    <Box component="img" alt="logo ulabs" src={ulabs} />,
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#389CD6",
      }}
    >
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
