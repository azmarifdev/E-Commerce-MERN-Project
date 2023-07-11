const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Api is working fine',
    });
});

app.listen(3001, () => {
    console.log(`server listening on port 3001`);
});
