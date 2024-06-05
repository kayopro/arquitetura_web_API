const express = require('express')
const router = express.Router();
const alunosService = require('../services/alunosService');


router.get('/alunos', function (req, res) {
    alunosEstrela = alunosService.getAlunosEstrela();
    res.send(alunosEstrela);
});





module.exports = router;