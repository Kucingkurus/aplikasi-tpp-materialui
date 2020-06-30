import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

//corecomponent
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PenarikanPencacahan() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="No AWB"
                      id="noAWB"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        disabled: false,
                      }}
                    />
                    <CustomInput
                      labelText="No Host AWB"
                      id="noHostAWB"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        disabled: false,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Nama Penerima"
                      id="namaPenerima"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        disabled: false,
                      }}
                    />
                    <CustomInput
                      labelText="Uraian Barang"
                      id="uraianBarang"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        disabled: false,
                      }}
                    />
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={2}>
                        <Button size="sm">cari</Button>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <Button size="sm">refresh</Button>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <Button size="sm">Create Surat togas penarikan</Button>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Country", "City", "Salary"]}
                  tableData={[
                    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                    [
                      "Philip Chaney",
                      "Korea, South",
                      "Overland Park",
                      "$38,735",
                    ],
                    [
                      "Doris Greene",
                      "Malawi",
                      "Feldkirchen in Kärnten",
                      "$63,542",
                    ],
                    ["Mason Porter", "Chile", "Gloucester", "$78,615"],
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
