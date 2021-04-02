import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

// ---------------------------------------------

import "./App.css";

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
  sidBarItems: {
    display: "flex",
    flexGrow: 2,
    marginTop: "10px",
    marginBottom: "10px",
  },
  space: {
    marginTop: "45px",
  },
  card: {
    display:"flex",
    flexDirection:"column",
    textAlign:"left",
    margin: "20px",
    width: "250px",
    backgroundColor: "#edf2fb",
    height: "150px",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight:"bold"
  },
  appBar: {
    backgroundColor: "#3ab795",
  },
  form: {
    marginTop: "5px",
  },
  btnStyle:{
    width:"20px",
    backgroundColor:"#a8d5e2",
    marginTop:"10px",

  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Grid container spacing={0}>
        {/* SideBar-Start */}
        <Grid item md={2} sm={3} xs={2}>
          <Paper className={classes.paper}>
            <div className={classes.space}></div>
            <List>
              {["Account", "State", "Database", "Main Repo"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["Dashboard", "Stat", "Report"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </Paper>
        </Grid>
        {/* SideBar-End */}

        <Grid item md={10} sm={9} xs={10}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon color="textSecondary" />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                My Application
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          {/* <Paper className={classes.paper}>cards and header</Paper> */}
          {/* Card's Grid */}
          <Grid container spacing={0.5}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.cardTitle}>
                  Some Lorem Ipsum...
                  <Divider />
                  <form className={classes.form} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Type..." />
                  </form>
                  <Button className={classes.btnStyle}>
                    ADD
                  </Button>
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
                  <Button className={classes.btnStyle}>
                    ADD
                  </Button>
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
                  <Button className={classes.btnStyle}>
                    ADD
                  </Button>
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
                  <Button className={classes.btnStyle}>
                    ADD
                  </Button>
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
                  <Button className={classes.btnStyle}>
                    ADD
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
