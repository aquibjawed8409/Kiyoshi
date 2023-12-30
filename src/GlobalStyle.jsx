import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body{
    overflow: hidden;
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
    width: 115px;
    background-color: #fff;
    margin-top: 10px;
}
.common-title{
    color: white;
    z-index: 100;
}
.common-title h2{
    font-weight: 900;
    letter-spacing: -2px;
    font-size: 4.5rem;
    line-height: 1;
    margin: 2rem;
    color: white;
}
.breadcrum{
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    color: red;
}
.breadcrum li a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
.breadcrum li{
    position: relative;
}
.content-heading{
    font-weight: 900;
    letter-spacing: -1px;
    margin: 1.5rem 0;
    text-align: center;
    margin-bottom: 3rem;
    letter-spacing: -1.5px;
    font-size: 4rem;
}
`;

export default GlobalStyle;