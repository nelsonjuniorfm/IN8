import styled from 'styled-components';

const ContainerCadatro = styled.div`
    display: block;
    width: 100%;
    height: 625px;
    background-color: #29abe2;
    padding: 0px 20%;
    @media (max-width: 480px){
        height: 1024px;
        padding: 0px 10%;
    }
`;

const HeaderCadastro = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    h1{
        color: #FFF;
        text-transform: uppercase;
        font-size: 3.12em;
        font-family: HelveticaCondensed;
    };
    a{
        pointer-events: none;
        text-decoration: none;
    }
    @media(max-width: 768px){
        font-size: 0.6em;
    }
    @media (max-width: 480px){
        font-size: 1.4em;
    }
`;

const ContentCadastro = styled.div`
    display: block;
    flex-direction: column;
    margin-top: 50px;
`;

const BoxInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    @media(max-width: 480px){
        margin-top: 40px;
    }
`;

const Input = styled.input`
    color: #FFF;
    border: none;
    background-color: #29abe2;
    border-bottom: 1px solid #FFF;
    height: 40px;
    width: 500px;
    display: block;
    font-family: HelveticaCondensed;
    @media(max-width: 480px){
        font-size: 1em;
        width: 600px;
    }
`;

const Label = styled.label`
    color: #FFF;
    font-family: RobotoRegular;
    @media(max-width: 480px){
        font-size: 1.5em;
    }
`;

const Buttom = styled.button`
    color: #29abe2;
    background-color: #012d51;
    border: none;
    height: 60px;
    width: 350px;
    text-transform: uppercase;
    font-family: HelveticaCondensed;
    font-size: 35px;
    @media(max-width: 480px){
        width: 100%;
        height: 100px;
        font-size: 3.5em;
    }
`;

const BoxButtom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    @media(max-width: 480px){
        margin-top: 80px;
    }
`;

export {
    ContainerCadatro,
    HeaderCadastro,
    Input,
    Label,
    ContentCadastro,
    BoxInput,
    Buttom,
    BoxButtom 
};