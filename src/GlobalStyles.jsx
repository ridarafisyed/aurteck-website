import styled, {createGlobalStyle} from 'styled-components';


// Global styles
const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,700;1,500&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #F9F9F9;
    color: #333;

}
`;

export default GlobalStyles;

export const Container = styled.div`
margin: 0 auto;
padding: 0 50px;
max-width: 1300px;
width: 100%;

@media (max-width:400px){
    padding: 0 10px;
}
@media (max-width:991px) {
    padding: 0 30px;
}

@media (min-width: 1500px) {
    max-width: 1500px;
}

@media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
}
`;

export const Button = styled.button`
border-radius: ${({bigRadius}) => bigRadius ? '30px': '20px'};
background-color: ${({primary}) => primary? 'orange': '#000'};
color: ${({primary}) => primary ? '#fff': '#eee'};
padding: ${({big}) => big? '18px 30px' : '10px 28px'};
font-size: ${({bigFont}) => bigFont? '20px': '18px'};
outline: none;
cursor: pointer;
border: none;
transition: all .5s ease;

&:hover{
    background-color: ${({primary}) => primary? '#333': 'orange'};  
    transform: translateY(-.5rem) scale(1.02);
    color: #fff;
}
&:active{
    transform: translateY(.5rem);
}

@media only screen and (max-width:1000px) {
    /* width: 100%; */
    padding: ${({big}) => big? '18px 30px' : '10px 20px'};
}
@media only screen and (max-width:375px) {
    padding: ${({big}) => big? '12px 20px' : '10px 20px'};
    font-size: ${({bigFont}) => bigFont? '16px': '18px'};
}


`;

export const OutlineButton = styled.button`
border-radius: ${({bigRadius})=> bigRadius? '40px' : '30px'};
border: 2px solid #333;
color: #333;
outline: none;
padding: ${({big}) => big? '15px 60px' : '13px 55px'};
font-size: ${({fontBig}) => fontBig? '22px':'18px'};
transition: all .5s ease;
background-color: #fefefe;


&:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-.5rem) scale(1.02);
}
&:active{
    transform: translateY(.5rem);
}


@media only screen and (max-width: 1200px) {
    border-radius: ${({bigRadius})=> bigRadius? '20px' : '18px'};
    padding: ${({big}) => big? '9px 30px' : '8px 28px'};
    font-size: ${({fontBig}) => fontBig? '18px':'16px'};
}
`;

// add it to the App.js file and put it at the top.
<GlobalStyles/>