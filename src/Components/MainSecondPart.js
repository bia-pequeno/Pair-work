// feito por João Vitor
import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import colher from './assets/colher.png'

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Source Code Pro', monospace;
    color: #373737;
    
}
`;
const SectionAbout = styled.section`
  display: flex;
  width: 98.2vw;
`;
const DivAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
`;
const ImagemAbout = styled.img`
  width: 50%;
`;
const TitleAbout = styled.h1`
  font-size: 2.5vw;
  font-weight: 500;
  margin-top: 2vw;
`;

const LineAbout = styled.div`
  border: 2px solid #373737;
  width: 4vw;
  margin-top: -1vw;
`;
const ParagraphAbout = styled.p`
  font-size: 1.02vw;
  display: flex;
  height: 30vh;
  margin-top: 5vw;
  width: 36.5vw;
  font-weight: 400;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <SectionAbout>
        <ImagemAbout
          src={colher}
          alt="Imagem de Colher"
        />
        <DivAbout>
          <TitleAbout>ABOUT</TitleAbout>
          <LineAbout></LineAbout>
          <ParagraphAbout>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
            dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
            quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
            sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Ut
            vestibulum nisl ante, et ultricies sapien facilisis aliquam.
          </ParagraphAbout>
        </DivAbout>
      </SectionAbout>
    
    </>
  );
}
