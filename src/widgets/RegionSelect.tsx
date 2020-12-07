import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { REGION } from "../utils/constants";

interface optionType {
  id: string;
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 150,
      marginLeft: "auto",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function RegionSelect(props: {
  handleRegion: Function;
  region: string;
  options?: optionType[];
}) {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.handleRegion(event.target.value as string);
  };

  const options = props?.options?.length ? props.options : REGION;

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="region-select-outlined-label">Region</InputLabel>
      <Select
        labelId="region-select-outlined-label"
        id="region-select-outlined"
        value={props.region}
        onChange={handleChange}
        label="Region"
        title="RegionSelect"
        classes={{ select: classes.select }}
      >
        {options.map((item, idx) => (
          <MenuItem value={item.id} key={item.id + idx}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
