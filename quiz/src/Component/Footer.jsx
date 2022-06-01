import * as React from "react";
import { Box, Grid,  Container } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <>
    
     
        <Grid container spacing={2}  sx={{
          ml: 1,
          mr:0,
          width:"100%",
          background:
            "linear-gradient(-45deg, rgba(2,0,36,1) 0%, rgba(18,109,128,0.32566530029980745) 31%, rgba(6,178,213,1) 79%, rgba(0,212,255,1) 100%)",
        }}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
          <Box sx={{ width: 800 }}>
            <Container sx={{ display: "flex" }}>
              <CopyrightIcon sx={{ height: "2.4em", mr: 2 }} />
              <h3>2022 QuizSite. Play and Enjoy</h3>
            </Container>
        </Box>

          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
    </>
  );
}
