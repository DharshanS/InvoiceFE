import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteInvoice } from "../services/api";

const containerStyle = { margin: "30px auto" };

function InvoiceTable({
  isLoading,
  invoiceList,
  setData,
  open,
  setOpen,
  setInvoiceList,
  setIsLoading,
  fetchAllInvoices,
}) {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "table-header",
    },
    {
      field: "invoiceNo",
      headerName: "Invoice No",
      width: 130,
      headerClassName: "table-header",
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 130,
      headerClassName: "table-header",
    },
    {
      field: "email",
      headerName: "email",
      type: "String",
      width: 90,
      headerClassName: "table-header",
    },
    {
      field: "invoiceDate",
      headerName: "Invoice Date",
      type: "String",
      width: 90,
      headerClassName: "table-header",
    },
    {
      field: "status",
      headerName: "Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerClassName: "table-header",
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "Action",
      headerName: "Action",
      description: "Action.",
      sortable: false,
      width: 200,
      margin: "auto",
      headerClassName: "table-header",
      renderCell: (params) => {
        const onClick = (e) => {
          const currentRow = params.row;
          deleteInvoice(currentRow.id).then((a) => {
            fetchAllInvoices(setInvoiceList, setIsLoading);
          });
        };
        const onEdit = (e) => {
          const currentRow = params.row;
          setOpen(true);
          setData(currentRow);
        };

        const b = { paddingTop: "10px" };
        return (
          <Stack direction="row" spacing={2} style={b}>
            <Button
              variant="outlined"
              color="warning"
              size="small"
              onClick={onEdit}
            >
              {" "}
              <EditIcon />
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={onClick}
            >
              {" "}
              <DeleteIcon />
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <Container style={containerStyle}>
      <div style={{ height: 400, width: "100%" }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <DataGrid
            rows={invoiceList}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        )}
      </div>
    </Container>
  );
}

export default InvoiceTable;
