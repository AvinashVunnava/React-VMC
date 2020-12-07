import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import cx from "classnames";

import useStyles from "./AppStyles";
import { ImageCards, InstanceTypes, Launch, RegionSelect } from "./widgets";
import { TABS } from "./utils/constants";
import { EstimatesType } from "./utils/types";

function getTabContent(
  estimates: EstimatesType[],
  value: number,
  region: string,
  handleSelectCard: Function,
  handleNext: Function,
  handleSelect: Function,
  handleBefore: Function
) {
  const defaultText = <div>Tab:{value} Work in Progress..!!!</div>;
  return (
    <div>
      {value === 1 ? (
        <ImageCards
          handleSelectCard={handleSelectCard}
          handleNext={handleNext}
          region={region}
        />
      ) : value === 2 ? (
        <InstanceTypes
          handleNext={handleSelect}
          handleBefore={handleBefore}
          handleTab={handleNext}
        />
      ) : value === 5 ? (
        <Launch estimates={estimates} />
      ) : (
        defaultText
      )}
    </div>
  );
}

export default function TabsContainer(props: {
  handleSelect: Function;
  handleRegion: Function;
  region: string;
  estimates: EstimatesType[];
}) {
  const classes = useStyles();
  const [tabs, setTabs] = useState<Array<number>>([1]);

  function handleTabs(val: number) {
    //TODO: Need to remove hardcoding
    if (tabs.includes(val) || val === 5) {
      let newTabs = [1, 2, 3, 4, 5];
      newTabs = newTabs.filter((i) => i <= val);
      setTabs(newTabs);
    }
  }

  function handleSelectCard(text: string, cost: number) {
    const estimate = {
      text: text,
      cost: cost,
      tab: tabs[tabs.length - 1],
    };
    props.handleSelect([estimate]);
  }

  function handleNext() {
    const newTabs = [...tabs];
    newTabs.push(newTabs[newTabs.length - 1] + 1);
    setTabs(newTabs);
  }

  function handleBefore() {
    const newTabs = [...tabs];
    newTabs.splice(newTabs.length - 1, 1);
    setTabs(newTabs);
  }

  const selectedTab = TABS.find((i) => i.tabNum === tabs[tabs.length - 1]);
  return (
    <div className={classes.tabsContainer}>
      <div className={classes.tabsHeader}>
        <div className={classes.tabTitle}>{selectedTab?.label}</div>
        <RegionSelect handleRegion={props.handleRegion} region={props.region} />
      </div>
      <div className={classes.tabs}>
        {TABS.map((tab, idx) => (
          <Tab
            label={`${idx + 1}. ${tab.label}`}
            id={tab.id}
            classes={{
              root: cx(classes.tab, {
                [classes.tabSelected]: !!tabs.includes(tab.tabNum),
              }),
              wrapper: cx(classes.tabLabel, {
                [classes.tabLabelSelected]: !!tabs.includes(tab.tabNum),
              }),
            }}
            onClick={() => handleTabs(tab.tabNum)}
          />
        ))}
      </div>
      <div>
        {getTabContent(
          props.estimates,
          tabs[tabs.length - 1],
          props.region,
          handleSelectCard,
          handleNext,
          props.handleSelect,
          handleBefore
        )}
      </div>
    </div>
  );
}
