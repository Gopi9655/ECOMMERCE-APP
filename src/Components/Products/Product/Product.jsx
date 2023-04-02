import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';
///import { classes } from 'istanbul-lib-coverage';
import useStyles from './styles'
 export const Product = ({product,onAddToCart}) => {
  const classes = useStyles();
  return (
  <Card className = {classes.root }>
    <CardMedia className={classes.media} image={product.image.url} title={product.name} />
    <CardContent>
      <div className={classes.CardContent}>
        <Typography variant='h5' gutterBottom className={classes.productName}>
          {product.name}
        <Typography variant='h5' className={classes.productPrice}>
          {product.price.formatted_with_code}
        </Typography>
        <Typography dangerouslySetInnerHTML={{ __html:product.description }} variant='body2' color="textSecondary" />

        </Typography>
      </div>
    </CardContent>
    <CardActions disableSpacing  className= {classes.CardActions}>
      <IconButton aria-label="Add to card" onClick={()=>onAddToCart(product.id, 1 )} >
        <AddShoppingCart />
      </IconButton>
    
    </CardActions>
  </Card>
  )
}
