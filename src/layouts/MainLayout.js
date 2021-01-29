import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  selectSidebarOpen,
  selectMobileSidebarOpen,
  setSidebarOpen,
  setMobileSidebarOpen,
  toggleDarkMode,
} from "../redux/features/layout/layoutSlice";

import {
  Avatar,
  CssBaseline,
  AppBar,
  Grid,
  useTheme,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";

import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Announcement as AnnouncementIcon,
  BubbleChart as BubbleChartIcon,
  FeaturedPlayList as FeaturedPlayListIcon,
  GroupWork as GroupWorkIcon,
  LocationCity as LocationCityIcon,
  SupervisorAccount as SupervisorAccountIcon,
  Apps as AppsIcon,
  Settings as SettingsIcon,
  DeveloperMode as DeveloperModeIcon,
  Brightness4 as Brightness4Icon,
} from "@material-ui/icons";

import { blue } from "@material-ui/core/colors";
import { selectUser } from "../redux/features/auth/authSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    //backgroundColor: theme.palette.background.default,
  },
  bottomBar: {
    backgroundColor: "#171717",
    top: "auto",
    bottom: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
  bottomDrawerBar: {
    backgroundColor: "#171717",
    top: "auto",
    bottom: 0,
  },
  mobilemenuiconbutton: {
    transition: "all 0.1s ease-in-out",
  },
  menuiconbutton: {
    marginLeft: (props) => (props.sidebarOpen ? props.drawerWidth : 0),
    transition: "all 0.1s ease-in-out",
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.background.default,
  },
  drawerContainer: {
    overflow: "auto",
  },
  currentlyplaying: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none", // IE and Edge
    scrollbarWidth: "none", // Firefox
    display: "flex",
    whiteSpace: "nowrap",
    overflowX: "scroll",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
  bottomBarContentStart: {
    marginLeft: (props) => (props.sidebarOpen ? props.drawerWidth : 0),
    "& button": {
      color: "white",
    },
  },
  currentlyplayingtwo: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none", // IE and Edge
    scrollbarWidth: "none", // Firefox
    display: "flex",
    whiteSpace: "nowrap",
    overflowX: "scroll",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
  content: {
    marginLeft: (props) => (props.sidebarOpen ? props.drawerWidth : 0),
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "-10px",
    marginBottom: "100px",
  },
  avatar: {
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
    margin: "0 5px 0 5px",
  },
  playbutton: {
    marginRight: "10px",
  },
  topbarrightbuttons: {
    "& button": {
      margin: "0 5px 0 5px",
    },
  },
  logo: {
    backgroundColor: "#FFFFFF",
    padding: 3,
    marginTop: 5,
  },
  bucketselect: {
    marginTop: 10,
  },
}));

const DrawerContent = ({ appBarClass, bucketselectClass }) => {
  const dispatch = useDispatch();

  const closeSideBar = () => {
    dispatch(setMobileSidebarOpen(false));
  };

  return (
    <>
      <AppBar position="static" className={appBarClass}>
        <Toolbar>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Typography variant="h5" style={{ paddingRight: "20px" }}>
              RMBDS
            </Typography>
            {/* <Typography variant="caption">Web Application</Typography> */}
          </Grid>
        </Toolbar>
      </AppBar>
      <List onClick={closeSideBar}>
        <ListItem
          button
          component={NavLink}
          to="/overview"
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/announcements"
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <AnnouncementIcon />
          </ListItemIcon>
          <ListItemText primary="Announcements" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/scanlists"
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <FeaturedPlayListIcon />
          </ListItemIcon>
          <ListItemText primary="Scan Lists" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/systems"
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <BubbleChartIcon />
          </ListItemIcon>
          <ListItemText primary="Systems" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/departments"
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <LocationCityIcon />
          </ListItemIcon>
          <ListItemText primary="Departments" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/channels"
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Channels" />
        </ListItem>
      </List>
      <Divider />
      <List onClick={closeSideBar}>
        <ListItem
          button
          component={NavLink}
          to="/admin"
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Admin" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/dummydata"
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <DeveloperModeIcon />
          </ListItemIcon>
          <ListItemText primary="Dummy Data" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/devtools"
          activeClassName="Mui-selected"
        >
          <ListItemIcon>
            <DeveloperModeIcon />
          </ListItemIcon>
          <ListItemText primary="Dev Tools" />
        </ListItem>
      </List>
    </>
  );
};

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [drawerWidth, setDrawerWidth] = useState("");
  const [mobileDrawerWidth, setMobileDrawerWidth] = useState("");
  const sidebarOpen = useSelector(selectSidebarOpen);
  const mobileSidebarOpen = useSelector(selectMobileSidebarOpen);
  const user = useSelector(selectUser);
  const classes = useStyles({
    sidebarOpen,
    mobileSidebarOpen,
    drawerWidth,
    mobileDrawerWidth,
  });

  const toggleSidebarOpen = () => {
    dispatch(setMobileSidebarOpen(!sidebarOpen));
    dispatch(setSidebarOpen(!sidebarOpen));
  };

  const toggleMobileSidebarOpen = () => {
    dispatch(setMobileSidebarOpen(!mobileSidebarOpen));
    dispatch(setSidebarOpen(!mobileSidebarOpen));
  };

  const toggleAppDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const logout = () => {};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid justify="space-between" alignItems="center" container>
            <Grid item>
              <Hidden smUp>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={toggleMobileSidebarOpen}
                  className={classes.mobilemenuiconbutton}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden xsDown>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={toggleSidebarOpen}
                  className={classes.menuiconbutton}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                alignItems="center"
                className={classes.topbarrightbuttons}
              >
                <Grid item>
                  <IconButton
                    title="Apps"
                    color="inherit"
                    component={RouterLink}
                    to="/dummydata"
                  >
                    <AppsIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    title="Dark/Light Mode"
                    color="inherit"
                    onClick={toggleAppDarkMode}
                  >
                    <Brightness4Icon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton title="Settings" color="inherit">
                    <SettingsIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="inherit" onClick={logout}>
                    <Avatar
                      alt={user?.displayName}
                      className={classes.avatar}
                      src={user?.photoURL}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <SwipeableDrawer
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileSidebarOpen}
          onClose={toggleSidebarOpen}
          ref={(mobileDrawerEl) => {
            if (mobileDrawerEl) {
              setMobileDrawerWidth(
                mobileDrawerEl.firstElementChild.clientWidth
              );
            }
          }}
        >
          <DrawerContent
            appBarClass={classes.appBar}
            bucketselectClass={classes.bucketselect}
          />
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          variant="persistent"
          open={sidebarOpen}
          onClose={toggleMobileSidebarOpen}
          ref={(drawerEl) => {
            if (drawerEl) {
              setDrawerWidth(drawerEl.firstElementChild.clientWidth);
            }
          }}
        >
          <DrawerContent
            appBarClass={classes.appBar}
            bucketselectClass={classes.bucketselect}
          />
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
