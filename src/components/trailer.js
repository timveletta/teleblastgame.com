import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  margin-bottom: -12.5%;

  iframe {
    position: absolute;
    top: 0;
    width: 70%;
    height: 70%;
    left: 15%;
  }
`

const Trailer = () => (
  <Container>
    <iframe
      title="Trailer"
      src="https://www.youtube.com/embed/hvwG9P39ASA"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Container>
)

export default Trailer
