const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const candidatos = [
    {
        nome: 'Pessoa 01 sobrenome01',
        email: 'pessoa01@email.com',
        telefone: '31999446625',
        dataNascimento: '11/11/1111'
    },
    {
        nome: 'Pessoa 02 sobrenome02',
        email: 'pessoa02@email.com',
        telefone: '3199446625',
        dataNascimento: '11/11/1111'
    },
    {
        nome: 'Pessoa 03 sobrenome03',
        email: 'pessoa03@email.com',
        telefone: '3199446625',
        dataNascimento: '11/11/1111'
    },
    {
        nome: 'Pessoa 04 sobrenome04',
        email: 'pessoa04@email.com',
        telefone: '3199446625',
        dataNascimento: '11/11/1111'
    },
];

app.get('/candidatos', (request, response) => {
    response.json(candidatos);
});

app.post('/candidatos', (request, response) => {
    const data = request.body;

    const candidato = {
        nome: data.nome,
        email: data.email,
        dataNascimento: data.dataNascimento,
        telefone: data.telefone
    };

    candidatos.push(candidato);
    
    return response.json(candidato);
});

app.listen(3333);