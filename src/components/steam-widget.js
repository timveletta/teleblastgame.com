import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: #cc17b2;
  color: #fff;
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;

  > div {
    max-width: 1000px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`

const SteamWidget = () => (
  <Container>
    <div>
      <h3>Available Now on Steam Early Access for PC / Mac / Linux</h3>
      <iframe
        src="https://store.steampowered.com/widget/915420/"
        frameborder="0"
        width="600"
        height="190"
      />
    </div>
  </Container>
)

export default SteamWidget
