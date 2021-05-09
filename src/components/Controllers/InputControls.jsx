import { TextField } from "@material-ui/core";

const InputControls = ({
  name,
  label,
  value,
  onChange,
  error = null,
  ...other
}) => {
  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default InputControls;
