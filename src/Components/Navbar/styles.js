import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: 'linear-gradient(to right,#ffafbd ,#ffc3a0)',
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3),
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.1rem',
    marginLeft: theme.spacing(2),
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(7),
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1.2rem',
    marginBottom: theme.spacing(3),
  },
  cartIconContainer: {
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      '& $cartIconBadge': {
        transform: 'scale(1.2)',
        transition: 'all 0.2s ease-in-out',
      },
      '& $cartIcon': {
        fill: theme.palette.secondary.main,
        transition: 'all 0.2s ease-in-out',
      },
    },
  },
  cartIcon: {
    fill: '#fff',
    height: '2rem',
  },
  cartIconBadge: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    background: theme.palette.secondary.main,
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#fff',
    transform: 'scale(1)',
    transition: 'all 0.2s ease-in-out',
  },
}));
