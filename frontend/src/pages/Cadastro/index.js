import React, { useState } from 'react';
import { dataMask, celularMask } from '../../utils/mascaras';
import CandidadosService from '../../services/candidatosService';

import {
    ContainerCadatro,
    HeaderCadastro,
    ContentCadastro,
    Input,
    Label,
    BoxInput,
    Buttom,
    BoxButtom
} from './styles';


export default function Cadastro() {

    const [
        nome,
        setNome
    ] = useState('');

    const [
        email,
        setEmail
    ] = useState('');

    const [
        nascimento,
        setNascimento
    ] = useState('');

    const [
        telefone,
        setTelefone
    ] = useState('');

    const handleChangeNascimento = (e) => {
        setNascimento(e.target.value);
    };

    const handleChangeTelefone = (e) => {
        setTelefone(e.target.value);
    };

    const getCandidato = () => {
        return {
            "nome" : nome,
            "email": email,
            "dataNascimento": nascimento,
            "telefone": telefone
        }
    };

    const novoCanditado = async () => {
        const response = await CandidadosService.AddCandidato(getCandidato());
        if(response)
        {
            alert('Novo registro criado');
        }
        window.location.href = "http://localhost:3000/#lista";
    };

    return (
        <ContainerCadatro>
            <HeaderCadastro>
            <a href='#cadastro' name='cadastro' id='cadastro'> <h1>Cadastro</h1></a>
            </HeaderCadastro>
            <ContentCadastro>
   
                    <BoxInput>
                        <Label htmlFor='nome'>
                            Nome
                            <Input
                                type='text'
                                id='nome'
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </Label>
                    </BoxInput>
                    <BoxInput>
                        <Label htmlFor='email'>
                            E-mail
                            <Input
                                type='email'
                                id='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Label>
                    </BoxInput>
                    <BoxInput>
                        <Label htmlFor='nacimento'>
                            Nascimento
                            <Input
                                type='text'
                                id='nacimento'
                                maxLength='10'
                                value={dataMask(nascimento)}
                                onChange={e => handleChangeNascimento(e)}
                            />
                        </Label>
                    </BoxInput>
                    <BoxInput>
                        <Label htmlFor='telefone'>
                            Telefone
                            <Input
                                type='tel'
                                id='telefone'
                                maxLength='15'
                                value={celularMask(telefone)}
                                onChange={e => handleChangeTelefone(e)}
                            />
                        </Label>
                    </BoxInput>
                    <BoxButtom>
                        <Buttom type='submit' name='button' onClick={novoCanditado}>Cadastrar</Buttom>
                    </BoxButtom>
       
            </ContentCadastro>
        </ContainerCadatro>
    );
}
