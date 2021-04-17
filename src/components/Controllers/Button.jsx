import { Button as MuiButton } from "@material-ui/core";
import useStyles from "./styles";

const Button = ({ text, size, color, variant, onClick, ...other }) => {
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
