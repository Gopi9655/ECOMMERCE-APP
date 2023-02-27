import React from 'react'
import useStyles from './styles'
import { Typography,Button,Card,CardActions,CardContent,CardMedia } from '@material-ui/core';

const Cartitems = ({item,handleRemovefromCart,handleUpdateqty}) => {
    const classes= useStyles();
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} className = {classes.media} />
        <CardContent className={classes.cardContent}>
            <Typography variant="h4">
                {item.name}   
            </Typography>
            <Typography variant="h5">
                {item.line_total_formatted_with_symbols}   
            </Typography>


        </CardContent>

        <CardActions className={classes.CardActions}>
            <div className={classes.buttons}>
                <Button type="button" size="small" onClick={()=>handleUpdateqty(item.id,item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small" onClick={()=>handleUpdateqty(item.id,item.quantity + 1)}>+</Button>    
                <Button type="button" variant="contained" color="secondary" onClick={()=>handleRemovefromCart(item.id
                    )}>remove</Button>                        
                    
            </div>
        </CardActions>
    </Card>
    
  )
}

export default Cartitems