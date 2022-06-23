// feito por João Vitor
import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Source Code Pro', monospace;
    color: #373737;
}`
   const SectionPrimary = styled.section`
    background-image: url(https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=8444393a-5d93-4997-8ad0-0d450a8011e0&api_key=CometServer1&access_token=1655944473_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_51619ff3a6e4fecee4e6489266222aff142a6f78);
   background-size: contain;
   width: 100%;
   height: 139vh;
  
   `
   const SecEnvolvente = styled.section`
   padding: 1.3vw;
   `
   const DivFather = styled.div`
   display: flex;
   align-items: center;
   
   `
   const DivNav = styled.div`
   display:flex;
   align-items: center;
   margin-top:8.37138508371385vh;
   margin-left: 4.612005856515373vw;
  
   `
   const TitleLogo = styled.h1`
   font-size: 3.513909224011713vw;
   font-weight: 500;
   margin-right: 50vw;
   cursor: pointer;
   `
   const Navegation = styled.nav`
   display:flex;
   align-items: center;
   justify-content: space-around;
   
   width: 32vw;
   display:flex;
   `
   const NavButton = styled.h2`
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 300;
   
   width: 10.4vw;
   height: 9vh;
   text-align: center;
   &:hover{
     border: solid #373737 2px;
     cursor: pointer;
   }
   `
   const Title = styled.h1`
   margin-left: 31.5vw;
   font-size:8vw;
   font-weight:600;
   margin-top: 17.5vw;
   `
export default function App() {
  return(
    <>
    <GlobalStyle/>
      <SecEnvolvente>
       <SectionPrimary>
       <DivFather>
       <DivNav>
         <TitleLogo>RC</TitleLogo>
         <Navegation>
        <NavButton>ABOUT</NavButton>
        <NavButton>RECIPES</NavButton>
        <NavButton>SUBSCRIBE</NavButton>
         </Navegation>
       </DivNav>
       </DivFather>

       <Title>RECIPES</Title>

     </SectionPrimary>
     </SecEnvolvente>
     <style>
        @import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
     </style>
      </>
    )
}