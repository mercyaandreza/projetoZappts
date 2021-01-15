const express = require('express');
const post = require('./src/app/post');
const get = require('./src/app/get');

const app = express();

app.use(express.json());
app.use(post);
app.use(get);

app.listen(3000, () => {
    console.log("Server is running");
});