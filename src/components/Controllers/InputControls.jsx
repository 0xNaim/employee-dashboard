import { TextField } from "@material-ui/core";

const InputControls = ({ name, label, value, onChange, error = null }) => {
  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default InputControls;
