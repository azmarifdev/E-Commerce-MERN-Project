const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use((req, res, next) => {
    res.status(404).json({ message: 'route cannot found' });
    next();
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something brock!' });
});

app.listen(3001, () => {
    console.log(`running server on port http://localhost:3001`);
});
