import React, {useContext, useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import {DialogStateContext} from "../providers/DialogStateProvider";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: 'absolute',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(5),
        right: theme.spacing(5),
      },
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(5),
        left: theme.spacing(5),
      },
    }
  })
);

const QuickAccessButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const {dispatch} = useContext(DialogStateContext);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleAddProblemDialog = () => {
    if (dispatch) {
      dispatch({
        type: "toggleAddProblem",
        payload: true,
      });
    }
  };

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        icon={<SpeedDialIcon/>}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          title='Add Problem'
          icon={<NoteAddIcon/>}
          tooltipTitle='Add Problem'
          onClick={() => {
            handleAddProblemDialog();
            handleClose();
          }}
        />
        <SpeedDialAction
          title='Refresh Problem'
          icon={<AutorenewIcon/>}
          tooltipTitle='Refresh Problem'
          onClick={() => {
            handleClose();
          }}
        />
      </SpeedDial>
    </div>
  )
}

export default QuickAccessButton;