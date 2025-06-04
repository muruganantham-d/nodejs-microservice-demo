const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/users', async (req, resp) => {
    const response = await axios.get('http://localhost:3001/users');
    resp.json(response?.data);
})

app.get('/products', async (req, resp) => {
    const response = await axios.get('http://localhost:3002/products');
    resp.json(response?.data);
})

app.listen(PORT, () => {
    console.log('User Service is running on port: '+ PORT);
})