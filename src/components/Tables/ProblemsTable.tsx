import React, {ReactElement, useContext} from 'react';
import {difficulty, platform, Problem, ProblemsContext} from "../../providers/ProblemProvider";
import {
  ButtonGroup,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

interface ProblemsTableProps {
  problems: Problem[];
}

const ProblemsTable = (props: ProblemsTableProps): ReactElement => {

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
    <TableContainer component={Paper}>
      <Table>
        {/*<TableHead>*/}
        {/*  <TableRow>*/}
        {/*    <TableCell>Platform</TableCell>*/}
        {/*    <TableCell>Problem</TableCell>*/}
        {/*    <TableCell># Practice</TableCell>*/}
        {/*    <TableCell># Remembered</TableCell>*/}
        {/*    <TableCell>Difficulty</TableCell>*/}
        {/*  </TableRow>*/}
        {/*</TableHead>*/}
        <TableBody>
          {props.problems.map(p => (
            <TableRow key={p.index}>
              <TableCell>{platform[p.platform]}</TableCell>
              <TableCell>{p.serial}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{difficulty[p.difficulty]}</TableCell>
              <TableCell>{(1 - p.weight).toFixed(2)}</TableCell>
              {/*<TableCell><LinearProgress variant="determinate" value={10} /></TableCell>*/}
              <TableCell>{p.practice}</TableCell>
              <TableCell>{p.remember}</TableCell>
              <TableCell>
                <ButtonGroup>
                  <IconButton
                    aria-label={"delete"}
                    onClick={() => handleDelete(p.index)}
                  >
                    <Tooltip title={"delete"}>
                      <CloseIcon color={"secondary"}/>
                    </Tooltip>
                  </IconButton>
                  <IconButton
                    aria-label={"remembered"}
                    onClick={() => handleUpdate(p, "remembered")}
                  >
                    <Tooltip title={"remembered"}>
                      <CheckIcon style={{color: "green"}}/>
                    </Tooltip>
                  </IconButton>
                  <IconButton
                    aria-label={"fail-to-remember"}
                    onClick={() => handleUpdate(p, "fail-to-remember")}
                  >
                    <Tooltip title={"forget"}>
                      <RadioButtonUncheckedIcon style={{color: "orange"}}/>
                    </Tooltip>
                  </IconButton>
                  <IconButton
                    aria-label={"reset"}
                    onClick={() => handleUpdate(p, "reset")}
                  >
                    <Tooltip title={"reset"}>
                      <RotateLeftIcon style={{color: "blue"}}/>
                    </Tooltip>
                  </IconButton>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProblemsTable;
