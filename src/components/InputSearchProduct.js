import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { productData } from "../data";
import OrderListTable from "./OrderListTable";

function InputSearchProduct() {
  const [searchResult, setSearchResults] = React.useState([productData]);
  const [rowsProduct, setRowsProduct] = React.useState();
  const [query, setQuery] = React.useState();
  const [qty, setQty] = React.useState();
  const [isShow, setIsShow] = React.useState(false);

  React.useEffect(() => {
    const local = JSON.parse(localStorage.getItem("productList"));
    console.log("local", local);
    setRowsProduct(local);
  }, [searchResult]);

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
  };

  const addToCart = (e) => {
    e.preventDefault();
    const data = { ...searchResult[0], ...{ qty: qty } };
    let toStore = [];
    toStore.push(data);
    if (rowsProduct !== undefined) {
      console.log(rowsProduct);
      //   //   toStore.push(rowsProduct);
      //   toStore.push(rowsProduct);
      toStore.push(rowsProduct?.map((i) => i));
    }
    // ;
    console.log(toStore);
    localStorage.setItem("productList", JSON.stringify(toStore));
  };
  //   console.log(localStorage.getItem("productList"));
  //
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
          <div style={{ display: "flex" }} key={item.id + idx}>
            <div style={styleItem}>
              <Typography>Product ID</Typography>
              <TextField
                id="productID"
                value={item.id}
                label=""
                variant="outlined"
              />
              <Typography>Cost</Typography>
              <TextField
                id="cost"
                value={item?.price}
                label=""
                variant="outlined"
              />
            </div>
            <div style={styleItem}>
              <Typography>Product name</Typography>
              <TextField
                id="name"
                value={item.name}
                label=""
                variant="outlined"
              />
              <Typography>Qty</Typography>
              <TextField onChange={handleQty} />
            </div>
          </div>
        );
      })}
      <Button onClick={addToCart} variant="contained">
        Add to cart
      </Button>
      {/* {rowsProduct && <OrderListTable rows={rowsProduct} />} */}
    </>
  );
}

export default InputSearchProduct;
