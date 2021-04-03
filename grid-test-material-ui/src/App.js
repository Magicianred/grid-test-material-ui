import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";
import { fade,makeStyles, useTheme } from "@material-ui/core/styles";
import BarChartRoundedIcon from "@material-ui/icons/BarChartRounded";
import TimelineIcon from "@material-ui/icons/Timeline";
import DescriptionIcon from "@material-ui/icons/Description";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import Button from "@material-ui/core/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StorageIcon from "@material-ui/icons/Storage";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import bgDrawer from './assets/bgDrawer.png';


// --------------------------------------------------------------------
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#ddbea9",
    color: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#2f3e46",
    backgroundImage:`url(${bgDrawer})` ,
    opacity:"0.7"
  },
  toolbarTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
    marginTop: "-45px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginTop: "80px",
    width: "300px",
    backgroundColor: "#fff",
    height: "150px",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.54)",
  },
  form: {
    marginTop: "5px",
  },
  btnStyle: {
    marginTop: "10px",
  },
  btnHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5px",
  },
  AddCircleOutlineSharpIcon: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  listItemTextAndIconColor: {
    color: "#fff",
  },
  list: {
    padding: "10px",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#ddbea9",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
// -----------------------------------------------------------------------
function App(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ListItem className={classes.toolbarTitle}>Ali Fard</ListItem>
      <Divider variant="middle" />
      <List className={classes.list}>
        {["Profile", "Status", "Dashboard", "Database"].map((text, index) => (
          <ListItem button key={text} className={classes.listItem}>
            <ListItemIcon className={classes.listItemTextAndIconColor}>
              {index === 0 ? <PersonOutlineRoundedIcon /> : true}
              {index === 1 ? <FindInPageRoundedIcon /> : true}
              {index === 2 ? <DashboardIcon /> : true}
              {index === 3 ? <StorageIcon /> : true}
            </ListItemIcon>
            <ListItemText
              primary={text}
              className={classes.listItemTextAndIconColor}
            />
          </ListItem>
        ))}
      </List>
      <Divider variant="middle"/>
      <List className={classes.list}>
        {["Reports", "Charts", "Integrations"].map((text, index) => (
          <ListItem button key={text} className={classes.listItem}>
            <ListItemIcon className={classes.listItemTextAndIconColor}>
              {index === 0 ? <BarChartRoundedIcon /> : true}
              {index === 1 ? <TimelineIcon /> : true}
              {index === 2 ? <DescriptionIcon /> : true}
            </ListItemIcon>
            <ListItemText
              primary={text}
              className={classes.listItemTextAndIconColor}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // -----------------------------------------------------------------------
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            API Application
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Grid container spacing={0}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.cardTitle}>
              Some Lorem Ipsum...
              <Divider />
              <form className={classes.form} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Type..." />
              </form>
              <div className={classes.btnHolder}>
                <Button size="small" className={classes.btnStyle}>
                  <AddCircleOutlineSharpIcon
                    className={classes.AddCircleOutlineSharpIcon}
                  />
                </Button>
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.cardTitle}>
              Some Lorem Ipsum...
              <Divider />
              <form className={classes.form} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Type..." />
              </form>
              <div className={classes.btnHolder}>
                <Button size="small" className={classes.btnStyle}>
                  <AddCircleOutlineSharpIcon
                    className={classes.AddCircleOutlineSharpIcon}
                  />
                </Button>
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.cardTitle}>
              Some Lorem Ipsum...
              <Divider />
              <form className={classes.form} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Type..." />
              </form>
              <div className={classes.btnHolder}>
                <Button size="small" className={classes.btnStyle}>
                  <AddCircleOutlineSharpIcon
                    className={classes.AddCircleOutlineSharpIcon}
                  />
                </Button>
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.cardTitle}>
              Some Lorem Ipsum...
              <Divider />
              <form className={classes.form} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Type..." />
              </form>
              <div className={classes.btnHolder}>
                <Button size="small" className={classes.btnStyle}>
                  <AddCircleOutlineSharpIcon
                    className={classes.AddCircleOutlineSharpIcon}
                  />
                </Button>
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
