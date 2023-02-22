import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <CssBaseline>
      <Box>
        <AppBar
          sx={{
            position: "sticky",
            textAlign: "center",
          }}
        >
          <Toolbar
            sx={{
              color: "white",
              bgcolor: "black",
              justifyContent: "center",
              display: flexbox,
              flexDirection: "column",
            }}
          >
            <Typography sx={{}} variant="h4">
              HVG
            </Typography>
            <Typography sx={{ color: "gold" }} variant="h6">
              Simple Counter App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </CssBaseline>
  );
};

export default Header;
