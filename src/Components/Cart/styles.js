import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    backgroundColor: "#000000 ",
  },
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: '10%',
    width: '100%',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 500,
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  subtotal: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginTop: theme.spacing(2),
    color:  "#9dff00",
    textTransform: 'uppercase',
    letterSpacing: '1px',
    '& span': {
      marginLeft: theme.spacing(2),
      color: fade(theme.palette.secondary.main, 0.8),
      fontWeight: 500,
      fontSize: '1.2rem',
      textTransform: 'none',
      letterSpacing: '0',
    },
  },
}));
