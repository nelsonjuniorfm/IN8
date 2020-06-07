import styled from 'styled-components';
import ImgBackground from '../../assets/rodape-desktop.jpg';
import ImgBackgroundMobile from '../../assets/rodape-mobile.jpg';

const ContainerSobre = styled.div`
    display: block;
    width: 100%;
    height: 200px;
    background-image: url(${ImgBackground});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0px 10%;
    @media(max-width: 480px){
        background-image: url(${ImgBackgroundMobile});
        height: 400px;
    }
`;

const ContentSobre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
    color: #FFF;
    font-family: RobotoLight;
    margin: 5% 0;
    a {
        pointer-events: none;
        cursor: default;
        text-decoration: none;
        color: #FFF;
    };
    @media(max-width: 480px){
        margin: 15% 0;
        p{
            font-size: 1.7em;
            padding: 8px;
        }
    }
`;

export { ContainerSobre, ContentSobre };