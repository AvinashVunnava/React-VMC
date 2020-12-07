import React, { useEffect, useState } from "react";
import cx from "classnames";
import Paper from "@material-ui/core/Paper";

import Select from "./Select";
import withStyles from "./styles";
import Button from "./Button";
import { INSTANCE_TYPES, DEFAULT_INSTANCE_TYPE } from "../utils/constants";

// => $20/month for 8vCPU so $2.5/month for 1vCPU
function generateCoreCost(core: number | undefined) {
  return core === undefined ? 0 : 2.5 * core;
}

function generateMemoryCost(memory: string | undefined) {
  return memory === "256 MB"
    ? 0.156
    : memory === "512 MB"
    ? 0.312
    : Number(memory?.split(" GB")[0]) * 0.625;
}

export default function InstanceTypes(props: {
  handleNext: Function;
  handleBefore: Function;
  handleTab: Function;
}) {
  const classes = withStyles();
  const [config, setConfig] = useState(DEFAULT_INSTANCE_TYPE);

  const selectedConfig = INSTANCE_TYPES.find((i) => i.id === config);
  const [core, setCore] = useState<number | undefined>(
    selectedConfig?.cores[0]
  );
  const [memory, setMemory] = useState<string | undefined>(
    selectedConfig?.memory[0]
  );

  useEffect(() => {
    setCore(selectedConfig?.cores[0]);
    setMemory(selectedConfig?.memory[0]);
  }, [selectedConfig]);

  function handleProceed() {
    const estimate1 = {
      text: `CPU Cores - ${core}`,
      cost: generateCoreCost(core),
      tab: 2.1,
    };
    const estimate2 = {
      text: `Memory - ${memory}`,
      cost: generateMemoryCost(memory),
      tab: 2.2,
    };
    props.handleNext([estimate1, estimate2]);
    props.handleTab();
  }

  return (
    <div>
      <div className={classes.instanceCardsContainer}>
        {INSTANCE_TYPES.map((item) => (
          <Paper
            onClick={() => setConfig(item.id)}
            className={cx(classes.instanceCard, {
              [classes.selectedInstanceCard]: item.id === selectedConfig?.id,
            })}
          >
            {item.label}
          </Paper>
        ))}
      </div>
      <div className={classes.instanceSelect}>
        <Select
          value={core}
          label={"CPU Cores"}
          handleSelect={setCore}
          options={selectedConfig?.cores}
        />
        <Select
          value={memory}
          label={"Memory"}
          handleSelect={setMemory}
          options={selectedConfig?.memory}
        />
      </div>
      <div className={classes.instanceNav}>
        <Button
          text={"Back"}
          handleClick={() => props.handleBefore()}
          isBackBtn
        />
        <Button text={"Proceed"} handleClick={handleProceed} />
      </div>
    </div>
  );
}
