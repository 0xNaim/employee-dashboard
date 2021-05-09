import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: "#FCE4EC",
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: "#E8EAF6",
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
}));


const ActionButton = ({ color, children, onClick }) => {
  
  const classes = useStyles()

  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ActionButton;