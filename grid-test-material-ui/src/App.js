import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import ArchiveRoundedIcon from "@material-ui/icons/ArchiveRounded";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
    backgroundColor: "#b2ebf2",
    color: "rgba(0, 0, 0, 0.54)",
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
  },
  card: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    margin: "80px",
    width: "250px",
    backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
    // backgroundColor: "#f4f4f6",
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
      <Divider />
      <List>
        {["Profile", "Status", "Dashboard", "Database"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <PersonOutlineRoundedIcon /> : true}
              {index === 1 ? <FindInPageRoundedIcon /> : true}
              {index === 2 ? <StorageRoundedIcon /> : true}
              {index === 3 ? <ArchiveRoundedIcon /> : true}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Reports", "Charts", "Integrations"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <BarChartRoundedIcon /> : true}
              {index === 1 ? <TimelineIcon /> : true}
              {index === 2 ? <DescriptionIcon /> : true}
            </ListItemIcon>
            <ListItemText primary={text} />
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
            Ali Fard's Application
          </Typography>
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
