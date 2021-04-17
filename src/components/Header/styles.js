import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    background: "#ffffff",
    transform: "translateZ(0)",
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    fontSize: "0.8rem",
    "&:hover": {
      background: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
}));
