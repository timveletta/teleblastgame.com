import React from "react"
import styled from "styled-components"
import AwardImage from "../images/pax-australia-award.png"
import Img from "gatsby-image"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  align-items: center;
  justify-items: center;

  img {
    width: 400px;
    margin-bottom: 2rem;
  }
`

const QuoteCard = styled.div`
  max-width: 600px;
  color: #ffffff;

  h4 {
    text-align: right;
    opacity: 0.5;
  }

  h3 {
    margin-bottom: 0;
  }
`

const Feedback = () => (
  <Container>
    <img src={AwardImage} />
    <div>
      <QuoteCard>
        <h3>
          "This is a quote that someone said about the game! Yay! I'm glad they
          had fun!"
        </h3>
        <h4>- Who Said It</h4>
      </QuoteCard>
      <QuoteCard>
        <h3>
          "This is a quote that someone said about the game! Yay! I'm glad they
          had fun!"
        </h3>
        <h4>- Who Said It</h4>
      </QuoteCard>
      <QuoteCard>
        <h3>
          "This is a quote that someone said about the game! Yay! I'm glad they
          had fun!"
        </h3>
        <h4>- Who Said It</h4>
      </QuoteCard>
    </div>
  </Container>
)

export default Feedback
