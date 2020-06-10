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
        padding: 0px 10%;
    };

    #listaMobile{
        @media(max-width: 480px){
            display: block;
            width: 100%;
        }
        display: none;
        margin-top: 30px;
        margin-right: 5%;
        justify-content: center;
        align-items: center;
        align-content: center;
        ul > li > a {
            margin: 0px 2px;
            border: 1px solid  #29abe2;
            border-bottom: none;
            border-radius: 0;
            padding: 8px 35px;
        };
        #ini{
            margin-left: 0px;
        };
        #fim{
            margin-right: 0px;
        };
        #myTabContent{
            border: 1px solid  #29abe2;
            width: 100%;
            div {
                margin-top: 10px;
                margin-bottom: 10px;
            };
            ul > li {
                list-style: none;
                border-bottom: 1px solid #29abe2;
                margin-top: 20px;
                margin-left: 10px;
                margin-right: 10px;
            }
        };
        #teste{
            width: 405px;
        }
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
        font-size: 1.4em;
        margin-top: 50px;
        text-align: center;
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
        display: none;
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
    border-bottom: ${props => (props.noBorderBottom ? 'none' : '1px solid #29abe2')};
    border-right: ${props => (props.noBorderRight ? 'none' : '1px solid #29abe2')};
    padding: 10px 20px;
    text-transform: uppercase;
`;

const Line = styled.tr`
`;

const Column = styled.td`
    color: #808080;
    border-bottom: ${props => (props.noBorderBottom ? 'none' : '1px solid #29abe2')};
    border-right: ${props => (props.noBorderRight ? 'none' : '1px solid #29abe2')};
    padding: 10px 15px;
    font-family: HelveticaCondensed;
`;

const BoxIcon = styled.div`
    justify-content: flex-end;
    margin-left: 3%;
`;

const TagTitle = styled.span`
    font-weight: bold;
    font-size: 1.5em;
`;

const TagName = styled.span`
    color: #012d51;
    font-weight: bold;
    font-size: 1.5em;
`;

const TagContent = styled.span`
    color: #808080;
    margin-left: 10px;
    font-size: 1.3em;
`;

export {
    ContainerLista,
    HeaderLista,
    ContentLista,
    Table,
    TableHeader,
    Line,
    Column,
    BoxIcon,
    TagName,
    TagContent,
    TagTitle
};