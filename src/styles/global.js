import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background: #000000;
        --container:#1B1B1C;
        --input: #f0f2f5;
        --button:#046ee5;
        --text: #eeee;
        --shadow: #0003;
        --label: #676767;
        --error: #FF0000;
    
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: var(--background);
        font-family: Arial, Helvetica, sans-serif;
    }    
`

export default GlobalStyle;