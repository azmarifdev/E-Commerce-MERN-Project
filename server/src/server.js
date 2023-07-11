const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Api is working and fine',
    });
});

app.listen(3001, () => {
    console.log(`server listening on port 3001`);
});
