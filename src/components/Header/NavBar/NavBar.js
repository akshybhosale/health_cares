import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import "./NavBar.css";
import useAuth from "../../../Hooks/useAuth";
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// const pages = ['home', 'services', 'doctors', 'Appointment', 'about', 'login'];
const settings = ["Profile", "Logout"];

const Navbar = () => {
  // authentication
  const { logout, user } = useAuth();
  const { displayName, photoURL } = user;

  //navigation
  let history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  //open naviagation for small device
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  // this is for close nav menu
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleUserControl = (event) => {
    const userEvent = event.currentTarget.innerText;
    if (userEvent === "Logout") {
      logout();
    } else if (userEvent === "Profile") {
      console.log("ok");
      history.push("/profile");
    }
  };
  return (
    <Box sx={{ mt: 8 }} style={{ justifyContent: "center" }}>
      <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {" "}
              <MenuItem
                  bgcolor="primary"
                  component={HashLink}
                  smooth
                  to="/home"
                >
              <HealingTwoToneIcon fontSize="large" />
              Health Care Hospital
              </MenuItem>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                style={{ justifyContent: "center" }}
              >
                {/*-------- small screen navigation-------- */}
                <MenuItem
                  bgcolor="primary"
                  component={HashLink}
                  smooth
                  to="/home"
                >
                  HOME
                </MenuItem>

                <MenuItem
                  bgcolor="primary"
                  component={HashLink}
                  smooth
                  to="/services"
                >
                  SERVICES
                </MenuItem>

                <MenuItem
                  bgcolor="primary"
                  component={HashLink}
                  smooth
                  to="/doctors"
                >
                  DOCTORS
                </MenuItem>
                <MenuItem
                  bgcolor="primary"
                  component={HashLink}
                  smooth
                  to="/appointment"
                >
                  APPOINTMENT
                </MenuItem>

                <MenuItem
                  bgcolor="primary"
                  component={HashLink}
                  smooth
                  to="/about"
                >
                  ABOUT
                </MenuItem>
                {!user?.email && (
                  <MenuItem
                    bgcolor="primary"
                    component={HashLink}
                    smooth
                    to="/login#login"
                  >
                    LOGIN
                  </MenuItem>
                )}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              align="center"
              component="div"
              sx={{ flexGrow: 1, pt: 2, display: { xs: "flex", md: "none" } }}
            >
              <HealingTwoToneIcon fontSize="large" /> Health Care Hospital
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              style={{ justifyContent: "center" }}
            >
              {/*-------- large screen navigation-------- */}

              <HashLink
                className="text-style text-style-fullscrn "
                smooth
                to="/home"
              >
                <Button sx={{ my: 2, color: "white", display: "block", px: 6 }}>
                  HOME
                </Button>
              </HashLink>

              <HashLink
                className="text-style text-style-fullscrn "
                smooth
                to="/services#services"
              >
                <Button sx={{ my: 2, color: "white", display: "block", px: 6 }}>
                  Services
                </Button>
              </HashLink>

              <HashLink
                className="text-style text-style-fullscrn "
                smooth
                to="/doctors#doctors"
              >
                <Button sx={{ my: 2, color: "white", display: "block", px: 6 }}>
                  Doctors
                </Button>
              </HashLink>

              <HashLink
                className="text-style text-style-fullscrn "
                smooth
                to="/appointment#appointment"
              >
                <Button sx={{ my: 2, color: "white", display: "block", px: 6 }}>
                  Appointment
                </Button>
              </HashLink>

              <HashLink
                className="text-style text-style-fullscrn "
                smooth
                to="/about#about"
              >
                <Button sx={{ my: 2, color: "white", display: "block", px: 6 }}>
                  About
                </Button>
              </HashLink>
              {!user?.email && (
                <HashLink
                  className="text-style text-style-fullscrn "
                  smooth
                  to="/login#login"
                >
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Login
                  </Button>
                </HashLink>
              )}
            </Box>

            {/* user info and navigation btn */}

            {user?.email ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={
                        user?.email ? photoURL : "/static/images/avatar/2.jpg"
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {" "}
                  <Typography
                    sx={{ p: "5px" }}
                    color="primary"
                    textAlign="center"
                  >
                    Hi, {displayName}
                  </Typography>
                  <Divider />
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography
                        onClick={handleUserControl}
                        textAlign="center"
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <></>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
