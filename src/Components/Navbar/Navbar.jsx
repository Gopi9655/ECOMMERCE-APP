import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../Assets/elogo.jpg'
import useStyles from './styles'
export const Navbar  = ({totalitem}) => {
  const classes = useStyles()
  return (
    <>
    <AppBar position='fixed' className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.title}>
          <img src={logo} alt="zencart" height="25px" className={classes.image}></img>
          ZenMart
        </Typography>
        <div className='classes.grow'></div>
        <div className='classes.button'></div>
        <IconButton aria-label="show cart item" color="inherit">
          <Badge badgeContent={totalitem} color="secondary">
           <ShoppingCart />
          </Badge>
        </IconButton>
        
      </Toolbar >
    </AppBar>
    </>
  )
}
