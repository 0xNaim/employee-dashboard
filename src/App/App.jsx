import { CssBaseline } from "@material-ui/core";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import Employees from "../pages/Employees/Employees";
import "./App.css";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
