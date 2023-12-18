import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { productData } from "../data";
import OrderListTable from "./OrderListTable";

function InputSearchProduct() {
  const [searchResult, setSearchResults] = React.useState([productData]);
  const [rowProducts, setRowProducts] = React.useState([]);
  const [query, setQuery] = React.useState();
  const [qty, setQty] = React.useState();
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    const row = JSON.parse(localStorage.getItem("productList"));
    setRowProducts(row);
  }, [submitted]);

  const setSearchQuery = () => {
    setSearchResults(
      productData.filter((product) => product.id.toString() === query)
    );
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };
  const styleItem = {
    margin: "10px",
    flexDirection: "row",
    width: 500,
    display: "flex",
  };
  const labelStyle = { margin: "10px", width: "100%" };

  const addToCart = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const local = JSON.parse(localStorage.getItem("productList"));
    let toStore = [...local];
    const data = { ...searchResult[0], ...{ qty: qty } };
    toStore.push(data);
    localStorage.setItem("productList", JSON.stringify(toStore));
    setSubmitted(false);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6"> Search Product ID: </Typography>
        <TextField onChange={handleInputChange} label="" variant="outlined" />
        <Button variant="contained" onClick={setSearchQuery}>
          Search button
        </Button>
      </Box>
      {searchResult.map((item, idx) => {
        return (
          <div
            style={{ display: "flex", width: "100%", flexDirection: "column" }}
            key={item.id + idx}
          >
            <div style={styleItem}>
              <Typography style={labelStyle}>Product ID</Typography>
              <TextField
                id="productID"
                value={item.id}
                label=""
                variant="outlined"
                sx={{ width: "200px" }}
              />
              <Typography style={labelStyle}>Cost</Typography>
              <TextField
                id="cost"
                value={item?.price}
                label=""
                variant="outlined"
                sx={{ width: "200px" }}
              />
            </div>
            <div style={styleItem}>
              <Typography style={labelStyle}>Product name</Typography>
              <TextField
                id="name"
                value={item.name}
                label=""
                variant="outlined"
                sx={{ width: "200px" }}
              />
              <Typography style={labelStyle}>Qty</Typography>
              <TextField onChange={handleQty} sx={{ width: "200px" }} />
            </div>
          </div>
        );
      })}
      <Button onClick={addToCart} variant="contained">
        Add to cart
      </Button>
      {rowProducts && <OrderListTable rows={rowProducts} />}
    </>
  );
}

export default InputSearchProduct;
