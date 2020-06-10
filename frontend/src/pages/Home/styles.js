import styled from 'styled-components';
import ImgBackground from '../../assets/index-image.jpg';
import ImgBackgroundMobile from '../../assets/index-image-mobile.jpg';

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 625px;
    background-image: url(${ImgBackground});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0px 20%;
    align-items: center;

    @media (max-width: 768px){
        padding: 0px 10%;
    };

    @media (max-width: 480px){
        background-image: url(${ImgBackgroundMobile});
        height: 1024px;
    };
`;

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-top: 10px;
    width: 100%;
    height: 100px;
    @media (max-width: 768px){
        flex-direction: row-reverse;
    }
`;

const BoxLogo = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    margin-left: 30px;
    img{
        width: 100px;
        height: 100px;
    }
`;

const BoxMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
`;

const ContentHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 400px;
    align-items: center;
    margin: 10% 0 0 -45%;
    padding: 10px;
    h1{
        color: #FFF;
        font-size: 5em;
        text-align: center;
        font-family: HelveticaCondensed;
        font-weight: 200;
        text-transform: uppercase;
        #sub{
            font-size: 0.44em;
        }
    }
    @media(max-width: 768px){
        h1{
            font-size: 4em;
            #sub{
            font-size: 0.44em;
            }
        }
    }
    @media(max-width: 480px){
        margin: 5% 0 0 0;
        h1{
            font-size: 6em;
            #sub{
            font-size: 0.42em;
            }
        }
    }
`;

export { ContainerHome, ContentHome, Header, BoxLogo, BoxMenu };