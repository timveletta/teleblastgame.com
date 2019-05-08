import React from "react"
import styled from "styled-components"

import GameModesImage from "../images/game-modes.png"
import LevelsImage from "../images/levels.png"
import PlayersImage from "../images/players.jpg"

const Container = styled.div`
  color: white;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`

const Header = styled.div`
  margin-bottom: 2rem;
  h1,
  h2 {
    line-height: 1.3;
  }
`

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  > div {
    img {
      border-radius: 4px;
      border: 4px solid #ffffff;
      width: 100%;
      height: auto;
      margin-bottom: 0;
    }
  }
`

const About = () => (
  <Container>
    <Header>
      <h1>
        Have a blast with 2-4 friends in this fast-paced, neon-retro experience
        that will have you teleporting around in ways you have never imagined!
      </h1>
      <h2>
        You are each equipped with a teleportation device that explodes upon
        use; catch the other players in the explosion to destroy them!
      </h2>
    </Header>
    <Features>
      <div>
        <img src={PlayersImage} />
        <h3>Simple, hectic multiplayer action</h3>
      </div>
      <div>
        <img src={GameModesImage} />
        <h3>Have a blast in 3 game modes</h3>
      </div>
      <div>
        <img src={LevelsImage} />
        <h3>More than 5 arenas to battle for supremacy</h3>
      </div>
    </Features>
  </Container>
)

export default About
