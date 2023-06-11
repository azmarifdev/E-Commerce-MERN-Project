const app = require('./app');
const { serverPort } = require('./secret');

app.listen(serverPort, () => {
    console.log(`running server on port http://localhost:${serverPort}`);
});
