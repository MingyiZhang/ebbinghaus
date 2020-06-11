import React, {useContext} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {ProblemDisplay, ProblemsContext} from "../../providers/ProblemProvider";
import {ButtonGroup, IconButton} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ProblemCardContent, {ProblemCardProps} from "./ProblemCardContent";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

const SelectedProblemCard = (props: ProblemCardProps) => {
  const classes = useStyles();
  const problem = props.problem;

  const {dispatch} = useContext(ProblemsContext);

  const handleUpdate = (p: ProblemDisplay, button: "remembered" | "fail-to-remember") => {
    p.updateTime = new Date().getTime();
    p.weight = 0;
    switch (button) {
      case "remembered":
        p.practice++;
        p.remember++;
        break;
      case "fail-to-remember":
        p.practice++;
        break;
    }
    if (dispatch) {
      dispatch({
        type: "updateProblem",
        payload: p,
      });
      dispatch({
        type: "deleteSelectedProblem",
        payload: p.index,
      });
    }
  };

  return (
    <Card className={classes.card}>
      <ProblemCardContent problem={problem}/>
      <CardActions>
        <ButtonGroup>
          <IconButton
            aria-label={"remembered"}
            onClick={() => handleUpdate(problem, "remembered")}
          >
            <CheckIcon style={{color: "green"}}/>
          </IconButton>
          <IconButton
            aria-label={"fail-to-remember"}
            onClick={() => handleUpdate(problem, "fail-to-remember")}
          >
            <RadioButtonUncheckedIcon style={{color: "orange"}}/>
          </IconButton>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default SelectedProblemCard;
