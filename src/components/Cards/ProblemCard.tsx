import React, {useContext} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {difficulty, platform, Problem, ProblemsContext} from "../../providers/ProblemProvider";
import {ButtonGroup, IconButton, LinearProgress, Tooltip} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    content: {
      textAlign: "left",

    }
  })
);

interface ProblemCardProps {
  problem: Problem;
}

const ProblemCard = (props: ProblemCardProps) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const problem = props.problem;

  const {dispatch} = useContext(ProblemsContext);

  const handleDelete = (index: string) => {
    if (dispatch) {
      dispatch({
        type: "deleteProblem",
        payload: index,
      });
      dispatch({
        type: "deleteSelectedProblem",
        payload: index,
      })
    }
  };

  const handleUpdate = (p: Problem, button: "remembered" | "fail-to-remember" | "reset") => {
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
      case "reset":
        p.practice = 1;
        p.remember = 1;
        break;
    }
    if (dispatch) {
      dispatch({
        type: "updateProblem",
        payload: p,
      });
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {platform[problem.platform]}{bull}{problem.serial}
        </Typography>
        <Typography variant="h5" component="h2">
          {problem.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {difficulty[problem.difficulty]}
        </Typography>
        <LinearProgress variant="determinate" value={(1 - problem.weight) * 100} style={{height: 10}}/>
      </CardContent>
      <CardActions>
        <ButtonGroup>
          <IconButton
            aria-label={"delete"}
            onClick={() => handleDelete(problem.index)}
          >
            <Tooltip title={"delete"}>
              <CloseIcon color={"secondary"}/>
            </Tooltip>
          </IconButton>
          <IconButton
            aria-label={"remembered"}
            onClick={() => handleUpdate(problem, "remembered")}
          >
            <Tooltip title={"remembered"}>
              <CheckIcon style={{color: "green"}}/>
            </Tooltip>
          </IconButton>
          <IconButton
            aria-label={"fail-to-remember"}
            onClick={() => handleUpdate(problem, "fail-to-remember")}
          >
            <Tooltip title={"forget"}>
              <RadioButtonUncheckedIcon style={{color: "orange"}}/>
            </Tooltip>
          </IconButton>
          <IconButton
            aria-label={"reset"}
            onClick={() => handleUpdate(problem, "reset")}
          >
            <Tooltip title={"reset"}>
              <RotateLeftIcon style={{color: "blue"}}/>
            </Tooltip>
          </IconButton>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default ProblemCard;
