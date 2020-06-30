import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";

const useStyles = makeStyles(styles);

export default function CustomSelect(kucing) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <FormControl style={{ minWidth: 120, marginTop: 0 }}>
      <InputLabel id={kucing.id}>{kucing.labelName}</InputLabel>
      <Select
        labelid={kucing.labelid}
        id={kucing.id}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={kucing.value}
        onChange={kucing.onChange}
        name={kucing.id}
      >
        {kucing.menuItems.map((prop) => {
          return (
            <MenuItem value={prop} key={prop}>
              {prop}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
