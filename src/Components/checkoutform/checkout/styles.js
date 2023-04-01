import { Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

export default makeStyles((theme) => ({
  /*grid:{
    display:'flex',
    width:'600px',
    height:'600px',
    flex:'1fr 2fr',flexDirection:'column'
  },*/
  ctext:{
   color:'#000000',
   
    fontWeight: 'bold',
  },
  appBar: {
    
        position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: '5%',
    
    
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor:'#861cf8',
      
    },
  },

  paper:  {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    
    
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 60,
      backgroundColor:'#0481fe',
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      backgroundColor:'#e9eae3'
      
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    backgroundColor:'#a7b7e9',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
   
    
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    
   
    
  },
  divider: {
    margin: '20px 0',
    backgroundColor:'#db8dff',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#db8dff',
  },
 
}))


;
