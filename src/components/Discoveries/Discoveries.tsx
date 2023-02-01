import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import womanOne from "../../assets/images/small/woman_one.png";
import womanTwo from "../../assets/images/small/woman_two.png";
import water from "../../assets/images/small/water.png";
import { sxStyles } from "./Discoveries.style";

const Discoveries: React.FC = () => {
  return (
    <Box>
      <Typography sx={sxStyles.discoveries} variant="h1">
        keep up to date with our discoveries
      </Typography>
      <Box sx={sxStyles.carousel}>
        <Paper sx={sxStyles.paper}>
          <Box component="img" alt="discover article 1" src={womanOne} />
          <Typography sx={ sxStyles.dicoveriesOne } variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Paper>
        <Paper sx={sxStyles.paper}>
          <Box component="img" alt="discover article 2" src={womanTwo} />
          <Typography sx={ sxStyles.dicoveriesOne }  variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Paper>
        <Paper sx={sxStyles.paper}>
          <Box component="img" alt="discorver article 3" src={water} />
          <Typography sx={ sxStyles.dicoveriesOne }  variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Discoveries;
