import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../Assets/elogo.jpg'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom'
export const Navbar  = ({totalitem}) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
    <AppBar position='fixed' className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography  component={Link} to="/" variant="h6" color="inherit" className={classes.title}>
          <img src={logo} alt="zencart" height="25px" className={classes.image}></img>
          ZigmArt
        </Typography>
        <div className='classes.grow'></div>
        {location.pathname === '/' && (
        <div className='classes.button'>
        <IconButton className={classes.cartIconContainer} aria-label="show cart item" color="inherit" component={Link} to="/cart">
          <Badge className={classes.cartIconBadge} badgeContent={totalitem} color="secondary">
           <ShoppingCart className={classes.cartIcon} />
          </Badge>
        </IconButton>
        </div>)}
        
      </Toolbar >
    </AppBar>
    </>
  
  )
}
