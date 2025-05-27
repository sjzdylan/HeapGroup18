// in order to see how this works, type 'node app.js' in the terminal
// then, type 'localhost:3000' on your browser

const express = require('express');
const path = require('path');
const app = express();
const users = require('./backend/routes/user');

app.use(users);


app.listen(3000,()=>{
    console.log('server started on port 3000');
});