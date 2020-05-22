import React, {useContext, useEffect} from 'react';
import './App.css';
import {ProblemsContext} from "./providers/ProblemProvider";
import ProblemsTable from "./components/ProblemsTable";
import {Grid} from "@material-ui/core";
import QuickAccessButton from "./components/QuickAccessButton";
import AddProblemDialog from "./components/Dialog/AddProblemDialog";
import {saveState} from "./utils/localStorage";

function App() {
  const {problems, selectedProblems} = useContext(ProblemsContext);

  useEffect(() => {
    console.log("save to local storage")
    console.log(problems);
    saveState(problems);
  }, [problems])
  
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

      <Grid container spacing={3} direction="column" justify="center" alignItems="center">
        <Grid item xs={11} sm={6}>
          <ProblemsTable problems={selectedProblems}/>
        </Grid>
        <Grid item xs={11} sm={6}>
          <ProblemsTable problems={problems}/>
        </Grid>
      </Grid>
      <QuickAccessButton/>
      <AddProblemDialog/>
    </div>
  );
}

export default App;
