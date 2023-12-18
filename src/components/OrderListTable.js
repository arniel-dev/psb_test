import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Typography } from "@mui/material";
function OrderListTable({ rows }) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Product Name", width: 130 },
    { field: "price", headerName: "Cost", width: 100 },
    {
      field: "qty",
      headerName: "Qty",
      type: "number",
      width: 100,
    },
    {
      field: "",
      headerName: "Action",
      width: 130,
      sortable: false,
      renderCell: (params) => {
        return <Button>Delete</Button>;
      },
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
          disableColumnMenu
          disableColumnFilter
        />
      </div>
    </>
  );
}

export default OrderListTable;
