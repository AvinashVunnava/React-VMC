import React from "react";

import { Select as MUISelect } from "@material-ui/core/";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 150,
      marginLeft: theme.spacing(1, 6),
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

export default function Select(props: {
  handleSelect: Function;
  value: string | undefined | number;
  label: string;
  options: (string | number)[] | undefined;
}): JSX.Element {
  const classes = useStyles();
  const { options } = props;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.handleSelect(event.target.value as string | number);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id={`${props.label}-select-outlined-label`}>
        {props.label}
      </InputLabel>
      <MUISelect
        labelId={`${props.label}-select-outlined-label`}
        id={`${props.label}-select-outlined`}
        value={props.value}
        onChange={handleChange}
        label={props.label}
        classes={{ select: classes.select }}
        title={"Select"}
      >
        {options?.map((item: string | number, idx: number) => (
          <MenuItem value={item} key={String(item) + idx}>
            {item}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}
