const moment = require('moment');
const axios = require('axios');
const conexao = require('../infraestrutura/database/conexao');
const repositorio = require('../repositorios/atendimento');

const query = require('../infraestrutura/database/queries');

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?';
        return query(sql, atendimento);
    }

    lista(){
        const sql = 'SELECT * FROM Atendimentos';

        return query(sql);
    }
}

module.exports = new Atendimento();