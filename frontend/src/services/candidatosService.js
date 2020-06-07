import API from './api';

// const dados = [
//     {
//         nome: 'Pessoa 01 sobrenome01',
//         email: 'pessoa01@email.com',
//         telefone: '31999446625',
//         dataNascimento: '11/11/1111'
//     },
//     {
//         nome: 'Pessoa 02 sobrenome02',
//         email: 'pessoa02@email.com',
//         telefone: '3199446625',
//         dataNascimento: '11/11/1111'
//     },
//     {
//         nome: 'Pessoa 03 sobrenome03',
//         email: 'pessoa03@email.com',
//         telefone: '3199446625',
//         dataNascimento: '11/11/1111'
//     },
//     {
//         nome: 'Pessoa 04 sobrenome04',
//         email: 'pessoa04@email.com',
//         telefone: '3199446625',
//         dataNascimento: '11/11/1111'
//     },
// ];

export default {
    async GetCandidatos(){
        const response = await API.get('/candidatos');
        return response.data;
    },
    
    async AddCandidato(candidato){
        const response = await API.post('/candidatos', candidato);
        return response;
    }
};