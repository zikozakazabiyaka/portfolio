import React from "react";
import { HashRouter } from "react-router-dom";

import Grid from "./components/Layout/Grid";
import GridContainer from "./components/Layout/GridContainer";
import ErrorHandler from "./containers/ErrorHandler";
import NavigationContainer from "./containers/Navigation";
import PagesRoute from "./containers/Pages";

function App() {
  return (
    <div className="App">
      <Grid>
        <HashRouter>
          <ErrorHandler>
            <NavigationContainer />
            <GridContainer>
              <PagesRoute />
            </GridContainer>
          </ErrorHandler>
        </HashRouter>
      </Grid>
    </div>
  );
};

export default App;
