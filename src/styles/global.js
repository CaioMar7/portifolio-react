import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
        font-family: 'Ubuntu', sans-serif;
        text-decoration: none;
        list-style: none;
    }
    
    body {
        background-color: #212040;

        padding: 2.25em 1.6875em;
        background-image: -webkit-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
        background-image: -moz-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
        background-image: -ms-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
        background-image: repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
        -webkit-background-size: 3px 3px;
        -moz-background-size: 3px 3px;
        background-size: 5px 5px;


        @media screen and (min-width: 450px) {
        padding: 2.25em 1.6875em;
        background-image: -webkit-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 3px, transparent 1px, transparent 100%);
        background-size: 50px 50px;
        }
    }
`