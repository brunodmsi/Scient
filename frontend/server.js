<<<<<<< HEAD
const express = require('express');
const { resolve } = require('path');

const app = express();

const builded = resolve(__dirname, 'build', 'index.html');
app.get('*', (request, response) => response.sendFile(builded));

app.listen(3000);
=======
const express = require('express')

const app = express()

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = process.env.REACT_APP_DEPLOY_PORT || 4000;

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))
>>>>>>> b98c610edd689b8a03f50814a74b7dd65fbc1ef5
