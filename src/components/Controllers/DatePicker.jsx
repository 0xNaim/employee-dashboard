import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const DatePicker = ({ name, label, value, onChange }) => {
  const convertToDefaultParameter = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        format="dd/MMM/yyyy"
        name={name}
        label={label}
        value={value}
        onChange={(date) => onChange(convertToDefaultParameter(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
