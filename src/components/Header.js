import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typed from "react-typed";
import ProfPic from "../images/profilepicture.png";


const Header = () => (
    <Box sx={
      {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
      }
    }>
      <Grid container sx={ {justifyContent: "center"} }>
        <Avatar sx={
          {
            width: "25%",
            height: 1,
            m: 1
          }
        } src={ProfPic} alt="David McNeary" />
      </Grid>
      <Typography sx={ {color: "tomato"} } variant="h4">
        <Typed strings={["David McNeary"]} typeSpeed={40} />
      </Typography>

      <Typography sx={
          {
            color: "tan",
            textTransform: "uppercase",
          }
        }
        variant="h5">
        <Typed
          strings={[
            "React",
            "Database",
            "Node",
            "Java",
            "PHP",
            "Perl",
            "Javascript",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <span>&nbsp;Developer</span>
      </Typography>
    </Box>
  );

export default Header;
