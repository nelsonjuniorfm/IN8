import styled from 'styled-components';

const ContainerLista = styled.div`
    display: block;
    width: 100%;
    height: 425px;
    background-color: #FFF;
    padding: 0px 20%;
    overflow-y: auto;
    @media (max-width: 480px){
        height: 624px;
    }
`;

const HeaderLista = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    h1{
        color: #29abe2;
        text-transform: uppercase;
        font-size: 3.12em;
        font-family: HelveticaCondensed;
    };
    a{
        pointer-events: none;
        cursor: default;
        text-decoration: none;
    };
    @media(max-width: 768px){
        font-size: 0.6em;
    };
    @media (max-width: 480px){
        font-size: 0.8em;
        margin-top: 50px;
    }
`;

const ContentLista = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    justify-content: center;
    align-items: flex-end;
    @media(max-width: 480px){
        margin-top: 50px;
    }
`;

const Table = styled.table`
    display: block;
    margin: 0px;
    border: none;
    border-collapse: collapse;
    font-size: 14px;
    @media (max-width: 768px){
        font-size: 0.625em;
    }
`;

const TableHeader = styled.th`
    color: #012d51;
    border-bottom: ${props => (props.noBorderBottom ? 'none': '1px solid #29abe2')};
    border-right: ${props => (props.noBorderRight ? 'none': '1px solid #29abe2')};
    padding: 10px 20px;
    text-transform: uppercase;
`;

const Line = styled.tr`
`;

const Column = styled.td`
    color: #808080;
    border-bottom: ${props => (props.noBorderBottom ? 'none': '1px solid #29abe2')};
    border-right: ${props => (props.noBorderRight ? 'none': '1px solid #29abe2')};
    padding: 10px 15px;
    font-family: HelveticaCondensed;
`;

const BoxIcon = styled.div`
    justify-content: flex-end;
    margin-left: 3%;
`;

export {
    ContainerLista,
    HeaderLista,
    ContentLista,
    Table,
    TableHeader,
    Line,
    Column,
    BoxIcon
};