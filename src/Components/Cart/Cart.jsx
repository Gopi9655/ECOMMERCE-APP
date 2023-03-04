import React from 'react'
import { Container,Typography,Button,Grid } from '@material-ui/core'
import useStyles from './styles'
import Cartitems from './cartitems/Cartitems'
import { Link } from 'react-router-dom'
export const Cart = ({cart,handleRemovefromCart,handleEmptycart,handleUpdateqty}) => {


    const classes= useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1"> You have empty item in ur cart!
        <Link to="/" className={classes.link}>start adding to ur cart</Link>
        </Typography>
        
    )
    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                    <Cartitems item={item} handleRemovefromCart={handleRemovefromCart} handleUpdateqty={handleUpdateqty} />
                    </Grid> 
            ))}
        </Grid>
        <div className={classes.cardDetails}>
                <Typography variant="h4">subtotal:{cart.subtotal.formatted_with_symbol}</Typography>
        </div>
        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptycart}>
            emptycart
        </Button>
        <Button component={Link} to = "/checkout"  size="large" className={classes.checkoutButton} type="button" variant="contained" color="primary">
            checkout
        </Button>


        </>
    )
    if(!cart || !cart.line_items) return <>loading...</>
  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>Your Cart is</Typography>
        { !cart.line_items.length? <EmptyCart />:<FilledCart />}
    </Container>
    
  )
}
