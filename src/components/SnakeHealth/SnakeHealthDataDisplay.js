import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { format } from "timeago.js";

import SnakeHealthButtons from "./SnakeHealthButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 700,
    marginTop: "0%",
    marginBottom: "5%",
    // marginLeft: "10%",
    // backgroundColor: "#fafafa",
    backgroundColor: "gainsboro",
  },

  title: {
    margin: theme.spacing(0, 0, 0),
  },
}));

export default function SnakeHealthDataDisplay() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  ///////////////////////////////////////////////////////////
  // SNAKE STATE
  const [state, setState] = useState({
    lastShed: 1630084274918, // Unix time stamp, place holder, use timago to display value
    lastCompleteShed: 1625385200000,
    poopFound: 1625385200000,
    urateFound: 1625385200000,
    ratOffered: 1625385200000,
    ratAte: 1625385200000,
    ratIgnored: 1625385200000,
    ratsIgnored: 2,
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Current Snek State
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              <ListItem>
                {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                <ListItemText
                  primary={`Waiting for shed since : ${format(state.lastShed)}`}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
              <ListItem>
                {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                <ListItemText
                  primary={`Last Complete Shed: ${format(
                    state.lastCompleteShed
                  )}`}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
              <ListItem>
                {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                <ListItemText
                  primary={`Fecal Waste Found: ${format(state.poopFound)}`}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
              <ListItem>
                {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                <ListItemText
                  primary={`Urate Found: ${format(state.urateFound)}`}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
              <ListItem>
                {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                <ListItemText
                  primary={`Rat Offered: ${format(state.ratOffered)}`}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
              <ListItem>
                {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                <ListItemText
                  primary={`Rat Ate: ${format(state.ratAte)}`}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
              <ListItem>
                {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                <ListItemText
                  primary={`Rat Ignored: ${format(state.ratIgnored)}`}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
              <ListItem>
                {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                <ListItemText
                  primary={`Rats Ignored since last meal: ${state.ratsIgnored}`}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
