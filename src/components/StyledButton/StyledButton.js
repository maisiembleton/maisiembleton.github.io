import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    background: "#17bebb",
    height: 40,
    margin: "2px",
    fontFamily: "Montserrat, sans-serif",
    border: "2px solid #17bebb",
    "&:hover": {
      border: "2px solid #17bebb",
    },
  },
})(Button);

export default StyledButton;
