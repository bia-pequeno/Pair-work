//feito por Beatriz
import React from "react"
import insta from './assets/icon-insta.png'
import twitter from './assets/icon-twitter.png'
import face from './assets/icon-face.png'
import pin from './assets/icon-pin.png'
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
  }
`
const Section1 = styled.section`
  background-color: #F2F4F1;
  display: flex;
  justify-content: space-between;
  padding-top: 10vh;
  padding-bottom: 10vh;
`
const NavImg = styled.div`
  margin-left: 2vw;
`
const Img = styled.img`
  width: 3vw;
  margin-left: 0.4vw;
`
const Navegation = styled.nav`
  display: flex;
  margin-right:2vw;
  p{
    margin-left:2vw;
    width: 9vw;
    height: 4vh;
    text-align: center;
    &:hover{
        border: solid #373737 2px;
        cursor: pointer;
      }
  } 
`
const Section2 = styled.section`
  background-color: #446061;
  width: 100%;

`
const Box = styled.div`
  margin-right: 3vw;
  width: 100%;
  height: 10vh;
`


export default function App(){
    return(
        <>
        <Section1>
            <NavImg>
                <Img src={insta} alt="instagram"/>
                <Img src={twitter} alt="twitter"/>
                <Img src={face} alt="facebook"/>
                <Img src={pin} alt="pinterest"/>
            </NavImg>
            <div>
                <Navegation>
                    <p>About</p>
                    <p>Recipes</p>
                    <p>Subscribe</p>
                </Navegation>
            </div>
        </Section1>
        <Section2>
            <Box>
            </Box>
        </Section2>
        </>
    )
}