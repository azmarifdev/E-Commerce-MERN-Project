const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    res.status(200).send({
        message: 'products are returned',
    });
});
app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'server working is fine',
    });
});
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'home page is returned',
    });
});

app.listen(3001, () => {
    console.log(`running server on port http://localhost:3001`);
});
