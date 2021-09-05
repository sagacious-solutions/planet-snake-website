import React, { useState } from "react";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TvOutlinedIcon from "@material-ui/icons/TvOutlined";
import TimelineIcon from "@material-ui/icons/Timeline";
import "./Navigation.scss";
import Home from "./Home";
import TemperatureHistory from "./TemperatureHistory";
import SnakeHealth from "./SnakeHealth";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#2a4d61",
    marginTop: "60px", // ADJUSTS PAGE HEIGHT FROM TOP
    height: "1500px", // Extends back color down
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // backgroundColor: "black", // CHANGE TOP BAR COLOR HERE

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function NavigationDrawer() {
  const defaultLandingPage = <Home />;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = useState(defaultLandingPage);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /////////////////////////////////////////////////////////////////
  // THIS DECIDES WHAT PAGE TO DISPLAY in the main area
  ////////////////////////////////////////////////////////////////////
  const displayPage = () => {
    return page;
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img
            className="snek-logo"
            src="images/SnekLogo.png"
            alt="snek-logo"
            onClick={() => alert("haha same!")}
          />
          <h2>Planet Snake: Sunny's Terrarium</h2>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>

          <ListItem
            button
            key={"home"}
            onClick={() => {
              setPage(<Home />);
            }}
          >
            <ListItemIcon>
              <TvOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>

          <ListItem
            button
            key={"graphs"}
            onClick={() => {
              // alert("HAHA! Graphs!");
              setPage(<TemperatureHistory />);
            }}
          >
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary={"Temperature History"} />
          </ListItem>

          <ListItem
            button
            key={"snakeHealth"}
            onClick={() => {
              setPage(<SnakeHealth />);
            }}
          >
            <ListItemIcon>
              <img
                className="snek-button"
                src="images/SnekSideBarBut.png"
                alt="snek-logo"
              />
            </ListItemIcon>
            <ListItemText primary={"Snake Health"} />
          </ListItem>

        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>{displayPage()}</main>
    </div>
  );
}
