import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function LayoutHeader() {
  const [user] = useAuthState(auth);
  const classes = useStyles();
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Iconic
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="#" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
            <div>
              { user ? 
                <Link to="#" onClick={() => logout ()} className={classes.link}>Logout</Link> :
                <Link to="/" className={classes.link}>Login</Link>
              }
            </div>
          </div>
      </Toolbar>
    </AppBar>
  );
};

export default LayoutHeader
