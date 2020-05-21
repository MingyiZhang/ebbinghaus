import React, {ReactElement} from 'react';
import {Problem} from "../providers/ProblemProvider";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

interface ProblemsTableProps {
  problems: Problem[];
}

const ProblemsTable = (props: ProblemsTableProps): ReactElement => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Platform</TableCell>
            <TableCell>Problem</TableCell>
            <TableCell># Practice</TableCell>
            <TableCell># Remembered</TableCell>
            <TableCell>Difficulty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.problems.map(p => (
            <TableRow>
              <TableCell>{p.platform}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.practice}</TableCell>
              <TableCell>{p.remember}</TableCell>
              <TableCell>{p.difficulty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProblemsTable;
