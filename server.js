const express = require('express');


const postDbRouter = require('./data/helpers/postDb-router');
const userDbRouter = require('./data/helpers/userDb-router');

const server = express();

const parser = express.json();

server.use(parser);

server.use('/api/posts', postDbRouter);
server.use('/api/users', userDbRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Node Blog</h2>
    <p>Welcome to the Lambda Node Blog API</p>
    `);
});

module.exports = server;
