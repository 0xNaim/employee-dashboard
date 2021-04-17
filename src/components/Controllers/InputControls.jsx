import { TextField } from "@material-ui/core";

const InputControls = ({ name, label, value, onChange }) => {
  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputControls;
