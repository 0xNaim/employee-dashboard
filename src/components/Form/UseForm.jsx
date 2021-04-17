import { useState } from "react";
import useStyles from "../../pages/Employees/styles";

export function UseForm(initialFieldValue) {
  const [values, setValues] = useState(initialFieldValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
}

export function Form({ children }) {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      {children}
    </form>
  );
}
