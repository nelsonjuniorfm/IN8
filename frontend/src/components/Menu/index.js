import React from 'react';
import { ListaMenu, MenuItem, LinkItem } from './styles';

export default function Menu() {
    return (
        <nav>
            <ListaMenu>
                <MenuItem><LinkItem href="#cadastro">cadastro</LinkItem></MenuItem>
                <MenuItem><LinkItem href="#lista">lista</LinkItem></MenuItem>
                <MenuItem><LinkItem href="#sobre">sobre mim</LinkItem></MenuItem>
            </ListaMenu>
        </nav>
    );
}