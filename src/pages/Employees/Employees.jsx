import {
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import {
  Add,
  Close,
  EditOutlined,
  PeopleOutlineTwoTone,
  Search,
} from "@material-ui/icons";
import { useState } from "react";
import {
  ActionButton,
  Button,
  InputControls,
} from "../../components/Controllers";
import PageHeader from "../../components/PageHeader/PageHeader";
import Popup from "../../components/Popup/Popup";
import UseTable from "../../components/Table/UseTable";
import * as EmployeeServices from "../../Services/EmployeeServices";
import EmployeeForm from "./EmployeeForm";
import useStyles from "./styles";

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department", disableSorting: true },
  { id: "actions", label: "Actions", disableSorting: true },
];

const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(EmployeeServices.getAllEmployees());
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = UseTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) EmployeeServices.insertEmployee(employee);
    else EmployeeServices.updateEmployee(employee);

    resetForm();
    setOpenPopup(false);
    setRecords(EmployeeServices.getAllEmployees());
    setRecordForEdit(null);
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form Design With Validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <InputControls
            className={classes.searchInput}
            label="Search Employees"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />

          <Button
            className={classes.addNewBtn}
            text="Add New"
            variant="outlined"
            startIcon={<Add />}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>

        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <ActionButton color="primary">
                    <EditOutlined
                      onClick={() => openInPopup(item)}
                      fontSize="small"
                    />
                  </ActionButton>
                  <ActionButton color="secondary">
                    <Close fontSize="small" />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </Popup>
    </>
  );
};

export default Employees;
