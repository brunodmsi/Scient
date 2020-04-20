const express = require('express');
const { resolve } = require('path');

const app = express();

const builded = resolve(__dirname, 'build', 'index.html');
app.get('*', (request, response) => response.sendFile(builded));

app.listen(3000);
