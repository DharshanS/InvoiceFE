import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { format } from "date-fns";
import { addInvoice, updateInvoice } from "../services/api";

export default function InvoiceModel({
  setOpen,
  open,
  setData,
  values,
  setInvoiceList,
  setIsLoading,
  fetchAllInvoices,
  update,
  setUpdate,
}) {
  const handleChange = (event) => {
    const { name, value } = event?.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (event) => {
    setData((prev) => ({
      ...prev,
      invoiceDate: format(new Date(event), "yyyy-MM-dd"),
    }));
  };

  const track = (event) => {
    setUpdate(false);
    setOpen(!open);
  };

  function constructInvoicePayload() {
    if (!update) {
      addInvoice(values).then(() => {
        fetchAllInvoices(setInvoiceList, setIsLoading);
        setOpen(false);
        setData(null);
      });
    }
    updateInvoice(values).then(() => {
      fetchAllInvoices(setInvoiceList, setIsLoading);
      setOpen(false);
      setData(null);
    });
  }

  return (
    <div>
      <FormControl style={{ marginTop: "10%", marginLeft: "45%" }}>
        <Button
          variant="contained"
          color="success"
          // onClick={() => setOpen(!open)}
          onClick={track}
        >
          <AddIcon />
          Add New Invoice
        </Button>
      </FormControl>

      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  id="invoiceNo"
                  label="Invoice Number "
                  variant="outlined"
                  value={values?.invoiceNo}
                  onChange={handleChange}
                  name="invoiceNo"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  id="customer"
                  label="Customer"
                  variant="outlined"
                  value={values?.customer}
                  onChange={handleChange}
                  name="customer"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  id="email"
                  label="Email "
                  variant="outlined"
                  type="email"
                  value={values?.email}
                  onChange={handleChange}
                  name="email"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Invoice Date"
                    type="date"
                    onChange={handleDateChange}
                    name="invoiceDate"
                  ></DatePicker>
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="status-select-label">Staus</InputLabel>
                <Select
                  labelId="status"
                  id="status"
                  value={values?.status}
                  label="Status"
                  onChange={handleChange}
                  name="status"
                >
                  <MenuItem value={"Pending"}>Pending</MenuItem>
                  <MenuItem value={"Paid"}>Paid</MenuItem>
                  <MenuItem value={"Unpaid"}>Unpaid</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  id="amount"
                  label="Amount "
                  variant="outlined"
                  type="Number"
                  value={values?.amount}
                  onChange={handleChange}
                  name="amount"
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Button
                  variant="contained"
                  color="success"
                  onClick={constructInvoicePayload}
                >
                  <SaveIcon /> Save Invoice{" "}
                </Button>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl fullWidth>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setOpen(!open)}
                >
                  <CloseIcon /> Close Invoice{" "}
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
