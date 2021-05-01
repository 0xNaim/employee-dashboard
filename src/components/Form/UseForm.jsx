import { useState } from "react";
import useStyles from "../../pages/Employees/styles";

export function UseForm(initialFieldValue, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFieldValue);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFieldValue);
    setErrors({});
  };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  };
}

export function Form({ children, ...other }) {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
}
