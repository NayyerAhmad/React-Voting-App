import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { green } from "@material-ui/core/colors";

const links = [
  { title: "Home", path: "/React-Voting-App" },
  { title: "Admin", path: "/Admin" },
  { title: "Guest", path: "/Guest" },
];

const useStyles = makeStyles((theme) => ({
  navlinks: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    fontSize: "1.2rem",
    fontWeight: 500,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: green,
    },
  },
  activeLink: {
    color: theme.palette.secondary.main,
  },
  logo: {
    marginRight: theme.spacing(3),
    fontWeight: 700,
    cursor: "pointer",
    color: theme.palette.primary.contrastText,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function Navbar({ title }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" className={classes.logo}>
          {title}
        </Typography>
        <div className={classes.navlinks}>
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.path}
              className={`${classes.link} ${
                location.pathname === link.path && classes.activeLink
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
