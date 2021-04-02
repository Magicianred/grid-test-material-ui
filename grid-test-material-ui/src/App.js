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
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import ArchiveRoundedIcon from "@material-ui/icons/ArchiveRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
import InsertDriveFileRoundedIcon from "@material-ui/icons/InsertDriveFileRounded";
import BarChartRoundedIcon from "@material-ui/icons/BarChartRounded";
import "./App.css";
// ---------------------------------------------
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
  appBarTitle: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "bold",
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
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    margin: "20px",
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
  appBar: {
    backgroundColor: "#b2ebf2",
  },
  form: {
    marginTop: "5px",
  },
  btnStyle: {
    marginTop: "10px",
    borderRadius: "50%",
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
// ---------------------------------------------
// App function component
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
              {["Account", "Status", "Database", "Archive"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index === 0 ? <PersonOutlineRoundedIcon /> : true}
                      {index === 1 ? <FindInPageRoundedIcon /> : true}
                      {index === 2 ? <StorageRoundedIcon /> : true}
                      {index === 3 ? <ArchiveRoundedIcon /> : true}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["Dashboard", "Chart", "Document", "Reports"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index === 0 ? <DashboardRoundedIcon /> : true}
                      {index === 1 ? <TimelineRoundedIcon /> : true}
                      {index === 2 ? <InsertDriveFileRoundedIcon /> : true}
                      {index === 3 ? <BarChartRoundedIcon /> : true}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
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
              <Typography
                variant="h6"
                className={classes.appBarTitle}
                color="textSecondary"
              >
                My Application
              </Typography>
              <Button
                style={{ fontWeight: "bold", color: "rgba(0, 0, 0, 0.54)" }}
              >
                Login
              </Button>
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
                    <Button size="small">
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
                    <Button size="small">
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
                    <Button size="small">
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
                    <Button size="small">
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
