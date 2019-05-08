import React from "react"
import styled from "styled-components"
import AwardImage from "../images/pax-australia-award.png"
import Img from "gatsby-image"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-around;

  img {
    max-width: 400px;
    margin-bottom: 2rem;
    flex: 1 1 400px;
  }

  > div {
    flex: 2 1 600px;
  }
`

const QuoteCard = styled.div`
  color: #ffffff;
  padding: 0 2rem;

  h4 {
    text-align: right;
    opacity: 0.5;
  }

  h3 {
    margin-bottom: 0;
    line-height: 1.5;
  }
`

const Feedback = () => (
  <Container>
    <img src={AwardImage} />
    <div>
      <QuoteCard>
        <h3>
          "Competitive multiplayer sports/combat games with a unique mechanic
          and that sound great to stream? Count me in. Not to mention the a e s
          t h e t i c aesthetic."
        </h3>
        <h4>- Matt McLeod, Select Start</h4>
      </QuoteCard>
      <QuoteCard>
        <h3>
          "Teleblast took me by surprise, offering up a tight, well-executed
          game about exploding and teleporting, and I’d dare call it my game of
          the show."
        </h3>
        <h4>- Nick Ballantyne, Game Cloud</h4>
      </QuoteCard>
      {/* <QuoteCard>
        <h3>
          "This is a quote that someone said about the game! Yay! I'm glad they
          had fun!"
        </h3>
        <h4>- Who Said It</h4>
      </QuoteCard> */}
    </div>
  </Container>
)

export default Feedback
