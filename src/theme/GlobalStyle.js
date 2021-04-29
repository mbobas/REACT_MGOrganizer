import {createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        font-size: 62.5% // 1 rem = 10px becouse 16 px it's a 100% of standard value for browser. Its simple to calculate. 
    }
    body {
        font-size: 1.6rem; // default value for all sites / happy rems
        font-family: "Montserrat", sans-serif;
    }
`;  

export default GlobalStyle;