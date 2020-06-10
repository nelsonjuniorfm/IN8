import React, { useState } from 'react';
import propTypes from 'prop-types';
import { ResponsiveMenu } from './styles';
import MenuIconClose from '../../assets/hamburguer.svg';
import MenuIconOpen from '../../assets/hamburguer-aberto0.svg';

export default function Menu() {

    const [
        open,
        setOpen
    ] = useState(false);

    return (
        <nav>
            <ResponsiveMenu open={open}>
                <>
                    <div id='desktop'>
                        <ul>
                            <li><a href="#cadastro">cadastro</a></li>
                            <li><a href="#lista">lista</a></li>
                            <li><a href="#sobre">sobre mim</a></li>
                        </ul>
                    </div>
                    <div id='mobileMenuShow'>
                        <input type='image' src={open ? MenuIconOpen : MenuIconClose} onClick={() => setOpen(!open)} />
                    </div>
                    <div id='mobile'>
                        <div id='aberto'>
                            <ul>
                                <li><a href="#cadastro">cadastro</a></li>
                                <li><a href="#lista">lista</a></li>
                                <li><a href="#sobre">sobre mim</a></li>
                            </ul>
                        </div>
                    </div>
                </>
            </ResponsiveMenu>
        </nav>
    );
}

Menu.propTypes = {
    open: propTypes.bool.isRequired,
    setOpen: propTypes.func.isRequired,
};