const express = require('express');
const userRouter = express.Router();

const users = [
    { id: 1, name: 'azm' },
    { id: 2, name: 'arif' },
    { id: 3, name: 'azmarif' },
    { id: 4, name: 'abdullah' },
];

userRouter.get('/', (req, res) => {
    console.log('middleware returned');
    res.status(200).send({
        message: 'user found',
        users,
    });
});

module.exports = userRouter;
