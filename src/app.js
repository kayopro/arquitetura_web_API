const express = require('express')
const app = express()
const routerAlunos = require('./controlllers/alunosController')


app.use(routerAlunos);

app.listen(3000);