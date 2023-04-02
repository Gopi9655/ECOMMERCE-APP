import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    border: "2px solid #f44336",
    borderRadius: "10px",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "all 0.3s ease-out",
      boxShadow: "0px 0px 20px #f44336",
      border: "2px solid #2b2d42",
    },
  },
  media: {
    height: 260,
  },
  CardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'linear-gradient(to bottom, #ffecd2, #fcb69f)',
  },
  CardActions: {
    ///justifyContent: 'space-between',
    ///background: 'linear-gradient(to top, #ffecd2, #fcb69f)',
    display: "flex",
    justifyContent: "flex-end",
    background: "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)",
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "8px",
    textTransform: "capitalize",
    color: "#2b2d42",
  },
}));
