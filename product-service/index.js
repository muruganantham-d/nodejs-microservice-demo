const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/products', (req, resp) => {
    resp.json([{id: 1, name: 'Laptop'}]);
})

app.listen(PORT, () => {
    console.log('Product Service is running on port: '+ PORT);
})