const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/users', (req, resp) => {
    resp.json([{id: 1, name: 'Muruganantham'}]);
})

app.listen(PORT, () => {
    console.log('User Service is running on port: '+ PORT);
})