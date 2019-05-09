import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"
import Image from "./image"
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

import BackgroundImage from "../images/background.png"

const Container = styled.header`
  height: 100vh;
  min-height: 600px;

  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: grid;
  grid-template-rows: 1rem auto;

  margin-bottom: -4rem;
`

const Links = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;

  a:hover {
    opacity: 1;
    cursor: pointer;
  }

  > div {
    padding-top: 0.5rem;
  }

  a {
    font-size: 1.2rem;
    margin: 0.5rem;
    color: #ffffff;
    font-weight: 600;
    text-decoration: none;
    opacity: 0.8;
  }

  > a {
    text-align: right;
  }
`

const ICON_SIZE = 32

const Header = () => (
  <Container>
    <Links>
      <div>
        <a href="https://discord.gg/ZRwbxWw">
          <FaDiscord size={ICON_SIZE} />
        </a>
        <a href="https://facebook.com/teleblast">
          <FaFacebook size={ICON_SIZE} />
        </a>
        <a href="https://instagram.com/teleblast">
          <FaInstagram size={ICON_SIZE} />
        </a>
        <a href="https://twitter.com/teleblastgame">
          <FaTwitter size={ICON_SIZE} />
        </a>
      </div>
      <Link to={"presskit"}>Press</Link>
    </Links>
    <div>
      <Image />
    </div>
  </Container>
)

export default Header
