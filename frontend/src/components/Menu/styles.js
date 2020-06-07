import styled from 'styled-components';

const ListaMenu = styled.ul`
    padding: 0px;
    margin: 0px;
`;

const MenuItem = styled.li`
    display: inline-block;
    font-family: RobotoRegular;
    @media (max-width: 768px){
        display: block;
    }
`;

const LinkItem = styled.a`
    padding: 2px 10px;
    display: inline-block;
    color: #FFF;
    text-decoration: none;
    :hover{
        border-bottom: 1px solid #FFF;
    }
`;

export { ListaMenu, MenuItem, LinkItem };