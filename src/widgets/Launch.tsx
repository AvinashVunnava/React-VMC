import React from "react";

import Button from "./Button";
import { exportToJson, estimatesToObj } from "../utils/utils";
import { EstimatesType } from "../utils/types";

export default function Launch(props: { estimates: EstimatesType[] }) {
  const YOURJSON = estimatesToObj(props.estimates);
  return (
    <Button handleClick={() => exportToJson(YOURJSON)} text={"Generate JSON"} />
  );
}
