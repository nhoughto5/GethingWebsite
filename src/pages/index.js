import * as React from "react"
import styled, { keyframes } from "styled-components";
import { Image } from "react-bootstrap";
import gething from "../images/gething2.jpg"
import { createGlobalStyle } from 'styled-components'
import audio from "../audio/cavemansound.mp3";
import {bounce, flip, fadeIn, pulse} from 'react-animations';

const flipAnimation = keyframes`${flip}`;
const bounceAnimation = keyframes`${bounce}`;
const fadeInAnim = keyframes`${fadeIn}`;
const slideupAnim = keyframes`${pulse}`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: hotpink;
    margin: 0;
    box-sizing: border-box;
  }
`

const RainbowBorderContainer = styled.div`
  --angle: 0deg;
  border: 1.2rem solid;
  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;

  animation: 10s rotate linear infinite;

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }
  
  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`


const flipAnim = keyframes`
0% {
  -webkit-transform: rotateX(-180deg);
          transform: rotateX(-180deg);
}
100% {
  -webkit-transform: rotateX(0);
          transform: rotateX(0);
}
`

const TextWrap = styled.div`
  animation: 3s ${slideupAnim};
  animation-iteration-count: infinite;
`

const ContentWrapper = styled.div`
display: flex;
height: 100%;
align-items: center;
flex-direction: column;
vertical-align: middle;
font-family: sans-serif;
text-align: center;
padding: 2rem 1rem;
overflow: scroll;
box-sizing: border-box;
-ms-overflow-style: none;  /* Internet Explorer 10+ */
scrollbar-width: none;  /* Firefox */
animation: 3s ${fadeInAnim};

&::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
}
img {
  vertical-align: middle;
  box-sizing: border-box;
  max-height: 90vh;
  max-width: 65%;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  border-color: black;
  animation-name: ${flipAnimation}, ${bounceAnimation};
  animation-duration: 2s, 1s;
  animation-delay: 0ms, 5s;
  animation-timing-function: ease-in, ease-out;
  animation-iteration-count: 1, 1;
}
h3 {
  text-decoration: underline;
}
@media (max-width: 700px) {
  img {
    max-width: 90%;
  }
}
@media (max-width: 525px) {
  h1 {
    font-size: 24px;
  }
}
`;

const IndexPage = () => {
  const start = () => {
    new Audio(audio).play();
  }

  return (
    <>
    <GlobalStyle />
    <main>
      <RainbowBorderContainer>
      <ContentWrapper>
          <Image src={gething} onClick={start}></Image>
          <TextWrap>
            <h1>He's the Ogo-Bogo man</h1>
            <h3>Feed me all your pencils</h3>
            <p>Press his silly face</p>
          </TextWrap>
      </ContentWrapper>
      </RainbowBorderContainer>
    </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Nic The Ogo-Bogo Man</title>
