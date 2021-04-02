import React, { Component } from "react";
// ---------------------------------
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';


// ---------------------------------------------

import "./App.css";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "100vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  sidBarItems:{
    display:"flex",
    flexGrow:2
  },
  space:{
    marginTop:"60px"
  }

}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Grid container spacing={0}>
        <Grid item md={2} sm={3} xs={2}>
          <Paper className={classes.paper}>
            <div className={classes.space}></div>
            <Divider/>
            <div className={classes.sidBarItems}>Status</div>
            <div className={classes.sidBarItems}>Dashboard</div>
            <div className={classes.sidBarItems}>Dashboard</div>
            <div className={classes.sidBarItems}>Dashboard</div>
            <div className={classes.sidBarItems}>Dashboard</div>
            <div className={classes.sidBarItems}>Dashboard</div>
            <div className={classes.sidBarItems}>Dashboard</div>
            <div className={classes.sidBarItems}>Dashboard</div>
            <div className={classes.sidBarItems}>Dashboard</div>
            <Divider/>

          </Paper>
        </Grid>
        <Grid item md={10} sm={9} xs={10}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                My Application
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Paper className={classes.paper}>cards and header</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
