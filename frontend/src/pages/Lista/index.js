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
    BoxIcon,
    TagName,
    TagContent,
    TagTitle
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
                            return (
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
            <div id='listaMobile'>
                <div id='teste'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="ini" data-toggle="tab" href="#home2" role="tab" aria-controls="home" aria-selected="true"><TagTitle>1</TagTitle></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#perfil" role="tab" aria-controls="profile" aria-selected="false"><TagTitle>2</TagTitle></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contato" role="tab" aria-controls="contact" aria-selected="false"><TagTitle>3</TagTitle></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="fim" data-toggle="tab" href="#contato222" role="tab" aria-controls="contact" aria-selected="false"><TagTitle>4</TagTitle></a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab">
                        <ul>
                            <li>
                                <TagName>NOME</TagName> <TagContent>Nelson Fernandes Mota Junior</TagContent>
                            </li>
                            <li>
                                <TagName>E-MAIL</TagName> <TagContent>pessoa@email.com</TagContent>
                            </li>
                            <li>
                                <TagName>NASC.</TagName> <TagContent>01/01/2001</TagContent>
                            </li>
                            <li>
                                <TagName>TEL.</TagName> <TagContent>(31) 9 8888-7777</TagContent>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="perfil" role="tabpanel" aria-labelledby="profile-tab">
                        <ul>
                            <li>
                                <TagName>NOME</TagName> <TagContent></TagContent>
                            </li>
                            <li>
                                <TagName>E-MAIL</TagName> <TagContent></TagContent>
                            </li>
                            <li>
                                <TagName>NASC.</TagName> <TagContent></TagContent>
                            </li>
                            <li>
                                <TagName>TEL.</TagName> <TagContent></TagContent>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="contato" role="tabpanel" aria-labelledby="contact-tab">
                        <ul>
                            <li>
                                <TagName>NOME</TagName> <TagContent></TagContent>
                            </li>
                            <li>
                                <TagName>E-MAIL</TagName> <TagContent></TagContent>
                            </li>
                            <li>
                                <TagName>NASC.</TagName> <TagContent></TagContent>
                            </li>
                            <li>
                                <TagName>TEL.</TagName> <TagContent></TagContent>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="contato222" role="tabpanel" aria-labelledby="contact-tab">
                        <ul>
                            <li>
                                <TagName>NOME</TagName> <TagContent></TagContent>
                            </li>
                            <li>
                                <TagName>E-MAIL</TagName> <TagContent></TagContent>
                            </li>
                            <li>
                                <TagName>NASC.</TagName> <TagContent></TagContent>
                            </li>
                            <li>
                                <TagName>TEL.</TagName> <TagContent></TagContent>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ContainerLista>
    );
}