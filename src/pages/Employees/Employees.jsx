import { Paper } from "@material-ui/core";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import PageHeader from "../../components/PageHeader/PageHeader";
import EmployeeForm from "./EmployeeForm";
import useStyles from "./styles";

const Employees = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form Design With Validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};

export default Employees;
