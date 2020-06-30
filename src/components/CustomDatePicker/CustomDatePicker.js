import "date-fns";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";

const useStyles = makeStyles(styles);

export default function CustomDatePicker(dateProps) {
  const classes = useStyles();
  return (
    <FormControl style={{ minWidth: 120 }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          style={dateProps.label && { marginTop: "2px" }}
          disableToolbar
          variant={dateProps.variant}
          format={dateProps.format}
          margin={dateProps.margin}
          id={dateProps.id}
          label={dateProps.label}
          value={dateProps.value}
          onChange={dateProps.onChange}
          KeyboardButtonProps={dateProps.KeyboardButtonProps}
          name={dateProps.id}
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  );
}
