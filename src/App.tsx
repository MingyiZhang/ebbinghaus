import React, {useContext} from 'react';
import './App.css';
import {ProblemsContext} from "./providers/ProblemProvider";
import ProblemsTable from "./components/ProblemsTable";
import {Grid} from "@material-ui/core";

function App() {
  const {problems} = useContext(ProblemsContext);
  console.log(problems);
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

      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={6}>
          <ProblemsTable problems={problems}/>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
