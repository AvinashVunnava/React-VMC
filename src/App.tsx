import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import useStyles from "./AppStyles";
import CostEstimates from "./CostEstimates";
import TabsContainer from "./TabsContainer";
import { DEFAULT_ESTIMATE } from "./utils/constants";
import { EstimatesType } from "./utils/types";

function App() {
  const classes = useStyles();
  const [estimates, setEstimates] = useState<EstimatesType[]>([
    DEFAULT_ESTIMATE,
  ]);
  const [region, setRegion] = useState<string>("");

  function handleEstimates(estimate: EstimatesType[]) {
    const updatedEstimates = [...estimates];
    estimate.map((item: EstimatesType) => {
      const estimateTab = item?.tab || 1;
      const selectedTabs = updatedEstimates.map((i) => i.tab);

      if (selectedTabs.includes(item.tab))
        updatedEstimates.splice(estimateTab - 1, 1);

      updatedEstimates.push(item);
      return 1;
    });
    setEstimates(updatedEstimates);
  }

  function handleRegion(val: string) {
    setRegion(val);
  }

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          VMC
        </Paper>
        <div className={classes.container}>
          <Grid container>
            <Grid lg={9}>
              <TabsContainer
                handleSelect={handleEstimates}
                handleRegion={handleRegion}
                region={region}
                estimates={estimates}
              />
            </Grid>
            <Grid lg={3}>
              <CostEstimates values={estimates} />
            </Grid>
          </Grid>
        </div>
      </header>
    </div>
  );
}

export default App;
