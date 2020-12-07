import React from "react";
import cx from "classnames";
import { Button as MUIButton } from "@material-ui/core";

import withStyles from "./styles";

export default function Button(props: {
  text: string;
  handleClick: Function;
  isBackBtn?: boolean | undefined;
}) {
  const classes = withStyles();
  return (
    <MUIButton
      variant={"contained"}
      classes={{
        contained: cx(classes.cardBtn, {
          [classes.backBtn]: !!props.isBackBtn,
        }),
      }}
      onClick={() => props.handleClick()}
    >
      {props.text}
    </MUIButton>
  );
}
