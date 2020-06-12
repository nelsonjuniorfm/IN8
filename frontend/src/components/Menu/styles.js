import styled from 'styled-components';

const ResponsiveMenu = styled.div`

    #desktop {
        display: block;
        @media (max-width: 768px){
                display: none;
        };

        li {
            display: inline-block;
            font-family: RobotoRegular;
        };

        a {
            padding: 2px 10px;
            display: inline-block;
            color: #FFF;
            text-decoration: none;
            :hover {
                border-bottom: 1px solid #FFF;
            }
        }
    };

    #mobileMenuShow{
        display: none;

        @media(max-width: 768px){
            display: block;
            position: absolute;
            z-index: 11;
            input{
                width: 40px;
                height: 40px;
                @media(max-width: 480px){
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }

    #mobile {

        display: ${props => props.open ? 'block' : 'none' };

        @media(min-width: 768px){
            display: none;
        }

        background-color: #29abe2;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        width: 300px;
        height: 400px;
        @media(max-width: 480px){
            width: 400px;
            height: 500px;
        }

        #aberto{
            margin-top: 160px;
            margin-left: 80px;
            @media(max-width: 480px){
                margin-top: 200px;
            }
            li {
                display: inline-block;
                font-family: RobotoRegular;
                font-size: 1.6em;
                display: block;
                padding: 10px 0;
                @media(max-width: 480px){
                    font-size: 2em;
                }
            };

            a {
                padding: 2px 0;
                margin: 0;
                display: inline-block;
                color: #FFF;
                text-decoration: none;
                :hover {
                    border-bottom: 1px solid #FFF;
                }
            };
        };
    };
`;


export { ResponsiveMenu };