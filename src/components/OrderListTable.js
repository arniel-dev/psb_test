import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
function OrderListTable({ rows }) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Product Name", width: 130 },
    { field: "cost", headerName: "Cost", width: 130 },
    {
      field: "Qty",
      headerName: "Qty",
      type: "number",
      width: 90,
    },
    {
      field: "price",
      headerName: "Amount",
    },
  ];

  return (
    <>
      <Typography> Order List</Typography>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default OrderListTable;
