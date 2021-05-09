import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { ActionButton } from "../../components/Controllers";
import useStyles from "./styles";

const Popup = ({ title, children, openPopup, setOpenPopup }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ActionButton onClick={() => setOpenPopup(false)} color="secondary">
            <Close />
          </ActionButton>
        </div>
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default Popup;
