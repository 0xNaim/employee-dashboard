import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import { NotListedLocation } from "@material-ui/icons";
import { Button } from "../../components/Controllers";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  dialogTitle: {
    textAlign: "center",
  },
  titleIcon: {
    backgroundColor: "#FCE4EC",
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "#FCE4EC",
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
}));

const ConfirmDialog = ({ confirmDialog, setConfirmDialog }) => {
  const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocation />
        </IconButton>
      </DialogTitle>

      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>

      <DialogActions className={classes.dialogAction}>
        <Button
          text="No"
          color="default"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
        <Button
          text="Yes"
          color="secondary"
          onClick={() => {
            confirmDialog.onConfirm();
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
