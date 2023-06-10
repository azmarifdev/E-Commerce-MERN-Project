const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/products', (req, res) => {
    res.status(200).send({
        message: 'products are returned',
    });
});
app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'server working is fine and',
    });
});
app.put('/test', (req, res) => {
    res.status(200).send({
        message: 'put: server working is fine',
    });
});
app.post('/test', (req, res) => {
    res.status(200).send({
        message: 'post: server working is fine',
    });
});
app.delete('/test', (req, res) => {
    res.status(200).send({
        message: 'delete: server working is fine',
    });
});
app.patch('/test', (req, res) => {
    res.status(200).send({
        message: 'patch: server working is fine',
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
