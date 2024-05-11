import React, { useState, useEffect } from "react";
import InvoiceList from "./InvoiceList";
import AddInvoice from "./AddInvoice";
import { Container } from "@mui/material";
import { getAllInvoices } from "../services/api";

function AppDashboard() {
  const [invoiceList, setInvoiceList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);

  useEffect(() => {
    fetchAllInvoices(setInvoiceList, setIsLoading);
  }, []);

  return (
    <Container>
      <AddInvoice
        open={open}
        setOpen={setOpen}
        values={data}
        setInvoiceList={setInvoiceList}
        setIsLoading={setIsLoading}
        fetchAllInvoices={fetchAllInvoices}
        setData={setData}
        update={update}
        setUpdate={setUpdate}
      />
      <InvoiceList
        isLoading={isLoading}
        invoiceList={invoiceList}
        setData={setData}
        open={open}
        setOpen={setOpen}
        setInvoiceList={setInvoiceList}
        setIsLoading={setIsLoading}
        fetchAllInvoices={fetchAllInvoices}
        setUpdate={setUpdate}
      />
    </Container>
  );
}

export default AppDashboard;

function fetchAllInvoices(setInvoiceList, setIsLoading) {
  const fetchInvoices = async () => {
    try {
      const invoices = await getAllInvoices();
      setInvoiceList(invoices.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching invoices:", error);
      setIsLoading(false);
    }
  };
  fetchInvoices();
}
