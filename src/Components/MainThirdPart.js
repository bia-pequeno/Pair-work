// feito por João Vitor
import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Source Code Pro', monospace;
    color: #373737;
    
}
` 
const SectionSubscribe = styled.section`
display: flex;

align-items: center;
flex-direction: column;
background-color: #DFE4DE;
height: 80vh;

`
const DivSubscribe = styled.div`
display: flex;

align-items: center;
flex-direction: column;
margin-top: 5vw;
`
const TitleSubscribe = styled.h1`
font-size: 2.6vw;
font-weight:600;
`
const Paragrapher = styled.p`
margin-top: -1.5vw;
font-size: 1.5vw;

`
const InputSubscribe = styled.input`
border: none;
background-color: #EFF1EE;
width:40vw;
height:12vh;
padding-left:3vw;
margin-top: 1vw;
`

const ButtonSubscribe = styled.button`
margin-top: 2vw;
border: none;
width:14vw;
height:10vh;
border: 4px solid  #373737;
font-weight: 600;
color: #373737;
font-size: 1.5vw;
cursor: pointer;
`

export default function App() {
  return (
    <>
   <GlobalStyle/>
   <SectionSubscribe>
   <DivSubscribe>
   <TitleSubscribe>SUBSCRIBE</TitleSubscribe>
   <Paragrapher>Sign up for newsletter</Paragrapher>
   <InputSubscribe 
   type="email" 
   alt="email" 
   placeholder="Your Email"
   ></InputSubscribe>
   <ButtonSubscribe>SUBMIT</ButtonSubscribe>
   </DivSubscribe>
   </SectionSubscribe>
    </>
  );
}
