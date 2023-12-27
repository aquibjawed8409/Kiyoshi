import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <ErrorContainer>
      <figure><img src="https://static.vecteezy.com/system/resources/thumbnails/008/255/803/small/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg" alt="Error" /></figure>
      <button><NavLink to="/">Home Page</NavLink> </button>
    </ErrorContainer>
  )
}

export default Error;

const ErrorContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 20px;

button{
  border: none;
  outline: none;
  background-color: #dc3545;
  padding: 10px 15px;
  font-size: 16px;
}
a{
  text-decoration: none;
  color: white;
}
`