export const getDepartmentCollection = () => [
  { id: 1, title: "Department" },
  { id: 2, title: "Marketing" },
  { id: 3, title: "Accounting" },
  { id: 4, title: "HR" },
];

const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const insertEmployee = (data) => {
  let employees = getAllEmployees();
  data["id"] = ganerateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

const ganerateEmployeeId = () => {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
};

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
}
