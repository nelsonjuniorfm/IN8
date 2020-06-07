import React from 'react';
import { ContainerSobre, ContentSobre } from './styles';

export default function Sobre() {
  return (
    <ContainerSobre>
        <ContentSobre>
            <a href='sobre' id='sobre' name='sobre'><p>Canditado nome sobrenome</p></a>
            <p>candidato@email.com</p>
            <p>(31) 9 9944 - 6625</p>
            <p>Faculdade de Belo Horizonte</p>
        </ContentSobre>
    </ContainerSobre>
  );
}