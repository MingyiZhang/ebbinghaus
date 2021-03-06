import React, {ReactElement, useContext} from 'react';
import {difficulty, platform, ProblemDisplay, ProblemsContext} from "../../providers/ProblemProvider";
import {ButtonGroup, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

interface ProblemsTableProps {
  problems: ProblemDisplay[];
}

const SelectedProblemsTable = (props: ProblemsTableProps): ReactElement => {

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
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {props.problems.map(p => (
            <TableRow key={p.index + 'selected'}>
              <TableCell>{platform[p.platform]}</TableCell>
              <TableCell>{p.serial}</TableCell>
              <TableCell>{p.title}</TableCell>
              <TableCell>{p.practice}</TableCell>
              <TableCell>{p.remember}</TableCell>
              <TableCell>{difficulty[p.difficulty]}</TableCell>
              <TableCell>
                <ButtonGroup>
                  <IconButton
                    aria-label={"remembered"}
                    onClick={() => handleUpdate(p, "remembered")}
                  >
                    <CheckIcon style={{ color: "green"}}/>
                  </IconButton>
                  <IconButton
                    aria-label={"fail-to-remember"}
                    onClick={() => handleUpdate(p, "fail-to-remember")}
                  >
                    <RadioButtonUncheckedIcon style={{ color: "orange"}}/>
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

export default SelectedProblemsTable;
