import { TextField, Typography } from '@mui/material'
import React from 'react'

function ProductDetail({item}) {
  return <>
    <div key={item.id}>
    {/* <Typography>Product ID</Typography>
    <TextField  id="productID" value={item.id} label="" variant="outlined" />
    <Typography>Cost</Typography>
    <TextField  id="cost" value={item?.price} label="" variant="outlined" />
    <Typography>Product name</Typography>
    <TextField  id="name" value={item.name} label="" variant="outlined" />  
    <Typography>Qty</Typography>
    <TextField onChange={handleQty} /> */}
    </div>
    </>
}

export default ProductDetail