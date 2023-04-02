import { makeStyles } from "@material-ui/core";

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
    height: 0,
    paddingTop: "56.26%",
  },
  CardActions: {
    display: "flex",
    justifyContent: "flex-end",
    background: "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)",
  },
  CardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    height: "100%",
    background: "linear-gradient(to bottom, #c9d6ff, #e2e2e2)",
    borderRadius: "20px 20px 0px 0px",
  },
  productName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "8px",
    textTransform: "capitalize",
    color: "#2b2d42",
  },
  productPrice: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#f44336",
  },
}));
