// import {createGlobalStyle} from 'styled-components';
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
h1{
    font-size: 5.5rem;
    font-weight: 900;
}
h2{
    font-size: 4.4rem;
    font-weight: 300; 
}
h3{
    font-size: 1.8rem;
    font-weight: 400;
}
p{
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0px;
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: white;
}
li{
    list-style: none;
}
.container{
    max-width: 1140px;
    margin: 0px auto;
}
.common-heading {
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 40px;
    text-transform: capitalize;
    margin: 20px;
}
.icons{
    color: red;
    font-size: 2.2rem;
}
.footer-title{
    font-size: 2rem;
    margin-bottom: 2.5rem;
    font-weight: 700;
    color: #fff;
    position: relative;
    padding-bottom: 1.5rem;
}
.footer-title::before{
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 2px;
    width: 50px;
    background-color: #fff;
    margin-top: 10px;
}
`

export default GlobalStyle;
