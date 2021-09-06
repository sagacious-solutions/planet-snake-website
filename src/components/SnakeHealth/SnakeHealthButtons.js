import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, withTheme, ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#fdd835",
    },
    secondary: {
      main: "#af6200",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
  },
  button: {
    marginTop: "0.4em",
    marginBottom: "0.4em",
  },
  // button:hover {
  //   backgroundColor: "goldenrod",
  //   transform: "scale(1.2)",
  // },

  // button:active {
  //   backgroundColor: goldenrod,
  //   transform: "scale(0.9)",
  // },
}));

function SnakeHealthButtons() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={buttonTheme}>
      <div className={classes.root}>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
          size="small"
        >
          <Button className={classes.button}>Shed Imminent</Button>
          <Button className={classes.button}>Shed Complete</Button>
          <Button className={classes.button}>Fecal Found</Button>
          <Button className={classes.button}>Urate Found</Button>
          <Button className={classes.button}>Rat Offered</Button>
          <Button className={classes.button}>Rat Ate</Button>
          <Button className={classes.button}>Rat Ignored</Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
}

export default withTheme(SnakeHealthButtons);
