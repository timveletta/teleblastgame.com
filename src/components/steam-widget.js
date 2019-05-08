import React from "react"
import styled from "styled-components"
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa"

import SteamLogo from "../images/steam-logo.png"

const Container = styled.div`
  background-color: #cc17b2;
  color: #fff;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 4rem;

  > div {
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 2rem;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr auto;
    grid-gap: 1rem;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 0.5rem 1rem;

      > iframe {
        display: none;
      }
    }

    @media (min-width: 800px) {
      .show-sm {
        display: none;
      }
    }

    > iframe {
      grid-row: span 2;
      justify-self: end;
    }

    > div {
      justify-self: end;
    }

    h6 {
      align-self: end;
    }

    a {
      color: white;
    }

    svg {
      margin: 0.6rem;
      opacity: 0.8;
    }

    svg:hover {
      opacity: 1;
      cursor: pointer;
    }

    :last-of-type {
      border-top: 1px solid #ffffff;
    }
  }
`

const ICON_SIZE = 64

const SteamWidget = () => (
  <Container>
    <div>
      <h3>Available Now on Steam Early Access for PC / Mac / Linux</h3>
      <div class="show-sm">
        <a href="https://store.steampowered.com/widget/915420/">
          <img src={SteamLogo} alt="View Game on Steam" />
        </a>
      </div>
      <iframe
        src="https://store.steampowered.com/widget/915420/"
        frameborder="0"
        width="600"
        height="190"
      />
      <h6>Xbox One, PlayStation 4 and Nintendo Switch planned!</h6>
    </div>
    <div>
      <h3>Be the first to find out what is happening!</h3>
      <div>
        <h5>
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
          <a href="https://twitch.tv/teleblast">
            <FaTwitch size={ICON_SIZE} />
          </a>
          <a href="https://www.youtube.com/channel/UCSTGVDLEBqGndT0vvmUpZyA">
            <FaYoutube size={ICON_SIZE} />
          </a>
        </h5>
      </div>
    </div>
  </Container>
)

export default SteamWidget
