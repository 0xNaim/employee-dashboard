import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";

const CheckBox = ({ name, label, value, onChange }) => {
  
  const convertToDefaultParameter = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            name={name}
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultParameter(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default CheckBox;
