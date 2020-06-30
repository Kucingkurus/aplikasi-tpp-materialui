import "date-fns";
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomSelect from "components/CustomSelect/CustomSelect";
import { InputLabel } from "@material-ui/core";
import CustomDatePicker from "components/CustomDatePicker/CustomDatePicker";
import Table from "components/Table/Table.js";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  formTitle: {
    marginTop: "0px",
    marginBottom: "0px",
  },
};

const useStyles = makeStyles(styles);

export default function DaftarBTD() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [formData, setFormData] = React.useState({
    pilihanPLH: "",
    petugasBC: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={9}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Daftar BTD</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={1} sm={1} md={2}>
                  <h5>Periode Penetapan:</h5>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                  <CustomDatePicker
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="periode-penetapan"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <CustomDatePicker
                    variant="inline"
                    format="dd/MM/yyyy"
                    label="s.d."
                    margin="normal"
                    id="periode-penetapan"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                  <CustomInput
                    labelText="Nama Penerima"
                    id="nama-penerima"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Uraian Barang"
                    id="uraian-barang"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <CustomInput
                    labelText="No. AWB"
                    id="no-awb"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: false,
                    }}
                  />
                  <CustomInput
                    labelText="No. AWB"
                    id="no-awb"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: false,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <Button color="primary" round>
                    Cari
                  </Button>
                  <Button color="secondary" round>
                    Refresh
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <GridItem>
              <CustomSelect
                labelName="Pilihan PLH"
                labelid="pilihanPLH"
                id="pilihanPLH"
                value={formData.pilihanPLH}
                onChange={handleChange}
                menuItems={["Ya", "Tidak"]}
              />
              <CustomSelect
                labelName="Petugas BC"
                labelid="petugasBC"
                id="petugasBC"
                value={formData.petugasBC}
                onChange={handleChange}
                menuItems={[
                  "Adler Simatupang - 196305221984101001",
                  "Agung Ridho Pamungkas -564654",
                ]}
              />
              <Button color="secondary" round>
                Cetak Laporan
              </Button>
            </GridItem>
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
                  ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
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
    </div>
  );
}
