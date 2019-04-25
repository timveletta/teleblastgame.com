import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;
  justify-items: center;

  > img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    border: 2px solid #ffffff;
    margin-bottom: 0;
  }
`

const Screenshots = () => (
  <Container>
    <img src="https://via.placeholder.com/400x225" />
    <img src="https://via.placeholder.com/400x225" />
    <img src="https://via.placeholder.com/400x225" />
    <img src="https://via.placeholder.com/400x225" />
    <img src="https://via.placeholder.com/400x225" />
    <img src="https://via.placeholder.com/400x225" />
    <img src="https://via.placeholder.com/400x225" />
    <img src="https://via.placeholder.com/400x225" />
  </Container>
)

export default Screenshots
