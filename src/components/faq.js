import React from "react"
import styled from "styled-components"

const Container = styled.div`
  color: white;
  max-width: 800px;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;

  > h2 {
    grid-column: span 2;
  }
`

const Question = styled.div`
  line-height: 1.5;
  padding: 0.2rem;
  h3 {
    margin-bottom: 0.2rem;
  }
  p {
    text-align: justify;
  }
`

const FAQ = () => (
  <Container>
    <h2>Frequently Asked Questions</h2>
    <div>
      <Question>
        <h3>What platforms is it for?</h3>
        <p>
          Currently TeleBlast is available on Windows, Mac and Linux through
          Steam Early Access. I am currently in talks to release the game on
          Switch, Xbox One and PS4 but nothing is confirmed. When I know more I
          will be sure to announce it!
        </p>
      </Question>
      <Question>
        <h3>How many players can play?</h3>
        <p>
          From 2-4 players can play. Any more would be too many and any less
          would be kind of boring. There are currently no plans to implement AI
          players to play against.
        </p>
      </Question>
      <Question>
        <h3>Can I play online?</h3>
        <p>
          Not natively - as a solo developer I have chosen to focus on console
          adaptations rather than a half baked online implementation. That is
          not to say its completely out of the picture but not something I am
          prioritising. You should check out Parsec though!
        </p>
      </Question>
    </div>
    <div>
      <Question>
        <h3>Do I need a gamepad to play on PC?</h3>
        <p>
          While gamepad is by far the best way to play TeleBlast, it is still
          possible to play with 2 players using the same keyboard, one using
          WASD and the other using the arrow keys
        </p>
      </Question>
      <Question>
        <h3>Wouldn't it be cool if...?</h3>
        <p>
          One of the best parts of being in Early Access is the amount of
          feedback and ideas people are willing to provide, its truly the best
          part of being "indie". If you have ideas or suggestions for the
          direction of the game, please feel free to join the Discord or get in
          touch with me directly!
        </p>
      </Question>
      <Question>
        <h3>Help! I have an issue!</h3>
        <p>
          I am far from the best game developer in the world so things are
          undoubtedly going to be buggy. If you have an issue please don't
          hesitate to get in contact with me through Discord or get in touch
          with me directly!
        </p>
      </Question>
    </div>
  </Container>
)

export default FAQ
