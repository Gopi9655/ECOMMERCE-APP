import React from "react";
import { Grid } from "@material-ui/core";
import { Product } from "./Product/Product";
import useStyles from './styles'

 
 export const Products = ({products,Onaddtocart}) => {
  const classes = useStyles()
   return (
     <main className={classes.content}>
      
      <div className={classes.toolbar} / >
        <Grid container justifyContent="center" spacing={4}>
        {products.map((product)=>
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                <Product product = {product} Onaddtocart={Onaddtocart}  />
            </Grid>
        )}
        </Grid>
     </main>
   )
 }