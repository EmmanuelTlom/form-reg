// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Box,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

// IMPORTING ICONS

// REACT APP IMPORTS


// LOCAL-STYLING




function Header() {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>


      <AppBar style={{ background: "#18182F !important" }}>
        <div style={{ width: "90%", margin: "auto" }}>
          <Toolbar>


            {isMobile ? (
              <>
                <Box style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                  <button style={{background: "none",border: "none"}}>
                  <a href="/"> <img src="./Logo.png" alt="" width="90px" /> </a>
                  </button>

                  <IconButton
                    style={{ color: "#fff" }}
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >

                              <MenuItem style={{ textTransform: "none !important", fontFamily: "Graphik" }} onClick={handleClose}>FAQS</MenuItem>
                              <MenuItem style={{ textTransform: "none !important", fontFamily: "Graphik" }} onClick={handleClose}>Book a slot</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  <Menu
                  // id="menu-appbar"

                  >

                    <Box style={{ float: 'center', display: 'flex' }}>
                      <Button
                        variant="text"
                        to='/#faqs'
                        style={{ marginRight: "2rem", color: '#18182F', textTransform: "none !important", fontFamily: "Graphik" }}
                      >
                        {/* */}
                        FAQs
                      </Button>
                    </Box>
                    <Button
                      variant="outlined"
                      to='/'
                      href=" https://calendly.com/beam-demo/1-1-strategic-planning-session-w-success-champion" target="_blank"
                      style={{ marginRight: "1rem", color: '#18182F', border: ' 1px solid #18182F', fontFamily: "Graphik", textTransform: "none !important", borderRadius: "8px" }}
                    >
                      {/* */}
                      Book a slot
                    </Button>
                  </Menu>
                </Box>
              </>
            ) : (
              <div style={{ marginRight: "2rem", color: '#fff', display: 'flex', width: "100%", justifyContent: "space-between", height: "40px" }}>
                <button style={{background: "none",border: "none"}}>
                   <a href="/"><img src="./Logo.png" alt="" width="100px" /></a>
                  </button>
                
                <Box style={{ float: 'center', display: 'flex' }}>
                  <Button
                    variant="text"
                    to='/'
                    href="/#faq"
                    style={{ marginRight: "2rem", color: '#fff' }}
                  >
                    {/* */}
                    FAQs
                  </Button>
                </Box>
                <Button
                  variant="outlined"
                  to='/'
                  href=" https://calendly.com/beam-demo/1-1-strategic-planning-session-w-success-champion" target="_blank"
                  style={{ marginRight: "2rem", color: '#fff', border: ' 1px solid #FFFFFF', textTransform: 'none', borderRadius: "8px" }}
                >
                  {/* */}
                  Book a slot
                </Button>
              </div>
            )}
          </Toolbar>
        </div>
      </AppBar>



    </div>
  );
};

export default Header;
