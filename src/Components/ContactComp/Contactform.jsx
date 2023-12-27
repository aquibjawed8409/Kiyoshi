import React from 'react'
import styled from 'styled-components';

const Contactform = () => {
  return (
    <Formcontainer>
      <h2 className="content-heading">Raise Your Enquiry</h2>
      <form action="" method='post' className='container'>
    <div className="form-container">
    <div className="input">
            <label htmlFor="name">Name</label>
            <input type="text"  required/>
        </div>
        <div className="input">
            <label htmlFor="email">Email</label>
            <input type="text"  required/>
        </div>
        <div className="input">
            <label htmlFor="phone">Phone</label>
            <input type="number"  required/>
        </div>
        <div className="input">
            <label htmlFor="">Subject</label>
            <input type="text"  required/>
        </div>
        <div className="input">
            <label htmlFor="">Message</label>
            <textarea name="message" className="message" style={{width: "100%", display:"block"}} cols="20" rows="6" required/>
        </div>
    </div>
      <div className='subscribe-btn'><button type="submit" className="footer-submit">subscribe now</button></div>
      </form>

    </Formcontainer>
  )
} 

export default Contactform;

const Formcontainer = styled.section`

.form-container{
    padding: 4rem;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    gap : 1rem;
    width: 100%;
}
.form-container .input{
    display: flex;
    flex-direction: column;
    width: 49%; 
}
.form-container:last-child{
    display: block;
}
.form-container .input label{
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: .5rem;
    display: inline-block;
}
.form-container .input input,
.form-container .input textarea{
    border: none;
    outline: none;
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1; 
    padding : 1.5rem;
    font-size: 1.6rem;
    border-radius: .4rem;
}
.form-container .input input:focus,
.form-container .input textarea:focus{
    border: 1px solid red;
    background-color: white;
}
.subscribe-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}
.subscribe-btn button{
    padding: .5rem 1rem;
    font-size: 1.6rem;
    background-color: #010101;
    color: rgba(255,255,255, 0.8);
    border: none;
    outline: none;
}
.subscribe-btn button:hover{
    background-color: rgba(01,01,01, 0.9);
    color: white;
    transition: all 0.5s ease-in-out;
}


/* ............Media Query............................ */
@media (max-width: 600px) {
    .form-container .input{
    width: 100%; 
}
}
`
