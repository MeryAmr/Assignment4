const express = require('express');
const app = express();
const port = 3000;
const { sequelize, User } = require('./models/index');
const get = require('./routes/GET');
const post = require('./routes/POST');
const del = require('./routes/DELETE');
const put = require('./routes/PUT');
app.use(express.json());
async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync();
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.use(post);
    app.use(get);
    app.use(put);
    app.use(del);
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}
main();