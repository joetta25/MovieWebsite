import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

const NavBar = () => {

    const classes = useStyles();
    return( 
        
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="red" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="red">
            <ul className="right">
                <li><a href="/Home"></a></li>
                <li><a href="/Library"></a></li>
                <li><a href="/About"></a></li>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>  
    )
}


export default NavBar;