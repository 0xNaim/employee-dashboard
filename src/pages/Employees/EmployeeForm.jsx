import { Grid } from "@material-ui/core";
import {
  Button,
  CheckBox,
  DatePicker,
  InputControls,
  RadioGroup,
  Select,
} from "../../components/Controllers";
import { Form, UseForm } from "../../components/Form/UseForm";
import getDepartmentCollection from "../../Services/EmployeeServices";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFieldValue = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = UseForm(initialFieldValue);

  return (
    <Form>
      <Grid container>
        <Grid item sm={6}>
          <InputControls
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <InputControls
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
          <InputControls
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <InputControls
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6}>
          <RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />

          <Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={getDepartmentCollection()}
          />

          <DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />

          <CheckBox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          <div>
            <Button type="submit" text="Submit" />
            <Button text="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
