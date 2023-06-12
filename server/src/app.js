const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routers/userRouter');
const app = express();

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5,
    message: 'Too many request from this IP. Please try again later.',
});

app.use(morgan('dev'));
app.use(rateLimiter);
app.use(xssClean());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('api/user', userRouter);

app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'server working is fine',
    });
});

app.use((req, res, next) => {
    next(createError(404, 'route cannot found'));
});
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
});

module.exports = app;
