const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

const isLoggedIn = (req, res, next) => {
    console.log('middleware working');
    next();
};

app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'server working is fine and',
    });
});

app.get('/api/user', isLoggedIn, (req, res) => {
    console.log('middleware returned');
    res.status(200).send({
        message: 'user found',
    });
});

app.listen(3001, () => {
    console.log(`running server on port http://localhost:3001`);
});
