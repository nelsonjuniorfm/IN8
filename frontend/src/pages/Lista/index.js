import React, { useState, useEffect } from 'react';
import IconTopo from '../../assets/topo-pag.svg';
import { celularMask } from '../../utils/mascaras';
import CandidatoService from '../../services/candidatosService';
import {
    ContainerLista,
    HeaderLista,
    Table,
    TableHeader,
    Line,
    Column,
    ContentLista,
    BoxIcon
} from './styles';

export default function Lista() {

    const [
        candidatos,
        setCandidatos
    ] = useState([]);

    useEffect(() => {
        getCandidatos();
    }, [
        candidatos
    ]);

    const getCandidatos = async () => {
        const response = await CandidatoService.GetCandidatos();
        setCandidatos(response);
    }

    return (
        <ContainerLista>
            <HeaderLista>
            <a href='#lista' id='lista' name='lista'><h1>Lista de Cadastro</h1></a>
            </HeaderLista>
            <ContentLista>
                <Table>
                    <tbody>
                    <Line>
                        <TableHeader></TableHeader>
                        <TableHeader>Nome</TableHeader>
                        <TableHeader>E-mail</TableHeader>
                        <TableHeader>Nascimento</TableHeader>
                        <TableHeader noBorderRight>Telefone</TableHeader>
                    </Line>
                    {candidatos.length > 0 && candidatos.map((pessoa, index) => {
                        let numberLinha = index + 1;
                        let retiraBorda = candidatos.length === numberLinha ? true : false;
                        return(
                            <Line key={index}>
                                <Column noBorderBottom={retiraBorda}>{numberLinha}</Column>
                                <Column noBorderBottom={retiraBorda}>{pessoa.nome}</Column>
                                <Column noBorderBottom={retiraBorda}>{pessoa.email}</Column>
                                <Column noBorderBottom={retiraBorda}>{pessoa.dataNascimento}</Column>
                                <Column noBorderBottom={retiraBorda} noBorderRight>{celularMask(pessoa.telefone)}</Column>
                            </Line>
                        )
                    })}
                    </tbody>
                </Table>
                <BoxIcon>
                    <a href='#home'><img src={IconTopo} width='30px' height='30px' alt='Icone Voltar' /></a>
                </BoxIcon>
            </ContentLista>

        </ContainerLista>
    );
}