import { Button, CssBaseline, Typography, Box } from "@mui/material";
import { green, lightGreen } from "@mui/material/colors";
import React from "react";
import { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const maintainincrement = () => {
    setCount(count + 1);
  };
  const maintaindecrement = () => {
    setCount(count - 1);
  };
  return (
    <CssBaseline>
      <Box
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ textAlign: "center", m: 2, color: "#DFFFD8" }}
          className="Count"
          variant="h4"
        >
          lap : {count}
        </Typography>
        <Box
          sx={{
            paddingLeft: 13,
          }}
        >
          <Button
            sx={{ m: 1 }}
            color="success"
            variant="contained"
            className="btn"
            onClick={maintainincrement}
          >
            +
          </Button>
          <Button
            color="error"
            variant="contained"
            className="btn"
            onClick={maintaindecrement}
          >
            -
          </Button>
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Counter;
