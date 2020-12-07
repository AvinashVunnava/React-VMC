import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";

import withStyles from "./styles";
import Button from "./Button";
import WarningModal from "./WarningModal";
import {
  PLATFORM_CARDS,
  BIT_TYPES,
  DEFAULT_BITTYPE,
  WINDOWS_IMAGE_REGION,
} from "./../utils/constants";

interface CardType {
  imageTitle: string;
  imageText: string;
  singleBit: boolean;
  cost: number;
}

interface BIT_TYPE {
  id: string;
  label: string;
}

function BitsType(props: {
  value: string;
  handleChange: Function;
  singleBit: boolean;
  handleNext: Function;
}): JSX.Element {
  const classes = withStyles();
  return (
    <div className={classes.cardRightContainer}>
      {!props.singleBit ? (
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="bitRate"
            name="biteRate"
            value={props.value}
            onChange={(e) => props.handleChange(e.target.value)}
          >
            {BIT_TYPES.map((bit: BIT_TYPE) => (
              <FormControlLabel
                value={bit.id}
                control={
                  <Radio
                    color="primary"
                    classes={{ checked: classes.radioRoot }}
                  />
                }
                label={bit.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ) : (
        <FormLabel component={"label"}>
          <strong>
            64-bit (ARM)
            <br />
            <br />
          </strong>
        </FormLabel>
      )}
      <Button handleClick={props.handleNext} text={"Select"} />
    </div>
  );
}

function Card(props: {
  imageTitle: string;
  imageText: string;
  cost: number;
  handleSelect: Function;
  handleWarningModal: Function;
  singleBit: boolean;
  handleNext: Function;
  region: string;
}) {
  const classes = withStyles();
  const [bitType, setBitType] = useState<string>(DEFAULT_BITTYPE);

  function handleBitsChange(val: string) {
    setBitType(val);
    props.handleSelect(props.imageTitle, props.cost);
  }

  function handleSelectBtn() {
    //TODO: Need to handle properly
    if (
      !props.region ||
      (props.imageTitle === "Microsoft Windows Server 2019 Base" &&
        !WINDOWS_IMAGE_REGION.includes(props.region))
    ) {
      props.handleWarningModal();
    } else {
      props.handleSelect(props.imageTitle, props.cost);
      props.handleNext();
    }
  }

  return (
    <Paper elevation={3} classes={{ root: classes.cardContainer }}>
      <div className={classes.card}>
        <Paper variant="outlined" classes={{ root: classes.cardImage }} />
        <div className={classes.cardText}>
          <span className={classes.cardImageTitle}>{props.imageTitle}</span>
          <br />
          <span className={classes.cardImageText}>{props.imageText}</span>
        </div>
        <BitsType
          value={bitType}
          handleChange={handleBitsChange}
          singleBit={props.singleBit}
          handleNext={handleSelectBtn}
        />
      </div>
    </Paper>
  );
}

export default function ImageCards(props: {
  handleNext: Function;
  handleSelectCard: Function;
  region: string;
}) {
  const classes = withStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleErrorModal() {
    setOpenModal(true);
  }

  return (
    <div>
      {PLATFORM_CARDS.map((card: CardType) => (
        <Card
          handleSelect={props.handleSelectCard}
          handleNext={props.handleNext}
          handleWarningModal={handleErrorModal}
          imageText={card.imageText}
          imageTitle={card.imageTitle}
          singleBit={card.singleBit}
          cost={card.cost}
          region={props.region}
        />
      ))}
      <WarningModal openModal={openModal}>
        <div>
          <div className={classes.modalHeader}>Warning</div>
          {props.region ? (
            <p>
              Windows Server is available only in US-East-1 and US-East-2
              region. Current Selected Region is{" "}
              <strong>{props.region.toUpperCase()}</strong>
            </p>
          ) : (
            <p>Please select a Region</p>
          )}
          <div className={classes.modalBtn}>
            <Button text={"Close"} handleClick={() => setOpenModal(false)} />
          </div>
        </div>
      </WarningModal>
    </div>
  );
}
