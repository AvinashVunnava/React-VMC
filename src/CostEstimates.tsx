import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import useStyles from "./AppStyles";
import { EstimatesType } from "./utils/types";
import { isInt } from "./utils/utils";

export default function CardEstimates(props: {
  values: EstimatesType[];
}): JSX.Element {
  const classes = useStyles();
  const finalCosts = props.values.map((i) => i.cost);
  let finalCost = finalCosts.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  finalCost = isInt(finalCost) ? finalCost : Number(finalCost.toFixed(3));

  return (
    <Paper elevation={3} classes={{ root: classes.estimatesCard }}>
      <strong>Cost Estimates</strong>
      <br />
      <br />
      {props.values.map((estimate: EstimatesType) => {
        let cost = estimate.cost;
        cost = isInt(cost) ? cost : Number(cost.toFixed(3));
        return (
          <div className={classes.estimateRow}>
            <div>{estimate.text}</div>
            <div className={classes.estimateCost}>${cost}</div>
          </div>
        );
      })}
      <div className={classes.totalCount}>
        <Divider />
        <br />
        <div>${finalCost}/mo</div>
      </div>
    </Paper>
  );
}
