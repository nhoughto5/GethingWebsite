import * as React from "react"
import styled, { keyframes } from "styled-components";
import { Image } from "react-bootstrap";
import gething from "../images/gething2.jpg"
import { createGlobalStyle } from 'styled-components'
import ReactAudioPlayer from 'react-audio-player';
import audio from "../audio/cavemansound.mp3"

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


const breatheAnimation = keyframes`
0% {
  -webkit-transform: rotateX(-180deg);
          transform: rotateX(-180deg);
}
100% {
  -webkit-transform: rotateX(0);
          transform: rotateX(0);
}
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
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
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

// const breatheAnimation = keyframes`
//   0% {
//     -webkit-transform: rotateX(0);
//             transform: rotateX(0);
//   }
//   100% {
//     -webkit-transform: rotateX(-180deg);
//             transform: rotateX(-180deg);
//   }
//  `

const IndexPage = () => {
  return (
    <>
    <GlobalStyle />
    <main>
      <RainbowBorderContainer>
      <ContentWrapper>
          <Image src={gething}></Image>
          <h1>He's the oogie boogie man</h1>
          <h3>Feed me all your pencils</h3>
          <ReactAudioPlayer
            src={audio}
            autoPlay
            // controls
          />
      </ContentWrapper>
      </RainbowBorderContainer>
    </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Nic The Ogo Bog Man</title>
