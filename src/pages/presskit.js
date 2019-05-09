import React from "react"
import styled from "styled-components"

import CoverImage from "../images/cover.jpg"
import Screenshot1 from "../images/screenshot-1.jpg"
import Screenshot2 from "../images/screenshot-2.jpg"
import Screenshot3 from "../images/screenshot-3.jpg"
import Screenshot4 from "../images/screenshot-4.jpg"
import Screenshot5 from "../images/screenshot-5.jpg"
import Screenshot6 from "../images/screenshot-6.jpg"
import Screenshot7 from "../images/screenshot-7.jpg"
import Screenshot8 from "../images/screenshot-8.jpg"
import Screenshot9 from "../images/menu-1.png"

// import ScreenshotsZip from "../images/screenshots.zip"
// import LogoZip from "../images/logo.zip"

import Logo1 from "../images/logo.png"
import Logo2 from "../images/logo-shadowed.png"
import Logo3 from "../images/logo-outlined.png"

import Alpha from "../images/alpha.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Alert from "../components/alert"

const Container = styled.div`
  color: #000000;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-weight: 400;
  }

  hr {
    color: #000000;
    background-color: #000000;
  }

  a {
    color: #000000;
  }
`

const Details = styled.div`
  > img {
    width: 100%;
    height: auto;
  }
`

const Factsheet = styled.div`
  ul {
    list-style: none;
    margin-left: 0;

    label {
      font-weight: 600;
    }
  }
`

const ImageDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;

  > img {
    background: url(${Alpha});
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const VideoWrapper = styled.div`
  border: 1px solid #000000;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  > div {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 99.9%;
      height: 100%;
      border: 0;
    }
  }

  > p {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`

const Presskit = () => (
  <Layout>
    <SEO title="Presskit" />
    <Container>
      <Factsheet>
        <h1>Factsheet</h1>
        <ul>
          <li>
            <label>Developer</label>
            <p>Tim Veletta</p>
          </li>
          <li>
            <label>Release Date</label>
            <p>26/10/2018 (Early Access)</p>
          </li>
          <li>
            <label>Platforms</label>
            <p>Windows, Mac, Linux</p>
          </li>
          <li>
            <label>Website</label>
            <p>
              <a href="https://teleblastgame.com">www.teleblastgame.com</a>
            </p>
          </li>
          <li>
            <label>Regular Price</label>
            <p>$9.99 AUD</p>
          </li>
          <li>
            <label>Social</label>
            <div>
              <a href="http://facebook.com/teleblast">Facebook</a>
            </div>
            <div>
              <a href="http://twitter.com/teleblastgame">Twitter</a>
            </div>
            <div>
              <a href="http://instagram.com/teleblast">Instagram</a>
            </div>
          </li>
        </ul>
      </Factsheet>
      <Details>
        <img src={CoverImage} alt="TeleBlast Cover Image" />
        <div>
          <h1>Description</h1>
          <p>
            TeleBlast is an explosive, fast-paced, local multiplayer game where
            up to 4 players can take to the arena to outplay each other using
            teleporters that explode upon use.
          </p>

          <p>
            Each player controls a teleporter that they can fire out and then
            activate to teleport to resulting in an explosion. It features a
            wide array of maps, game modes and variations that keep the game
            fresh and players on their toes.
          </p>

          <p>
            So get some friends together, fire up those teleporters and have a
            blast in TeleBlast.
          </p>
        </div>
        <div>
          <h1>History</h1>
          <p>
            TeleBlast was started at Global Game Jam in 2018 where the theme was
            "transmission". It was originally designed with more of a sporting
            feel about it and was called "Major League TeleBlast". The game jam
            version of the game had only a single mode, TeleBlast, where you
            would play round-by-round until one player reached 10 kills and only
            a single map.
          </p>
          <p>
            The game received warm feedback at the post-jam event but it wasn't
            until I played with my closest friends that I realised the potential
            going forward. After 4 months of constant additional features and
            building the game out, it was submitted for the PAX Australia Indie
            Showcase. It ended up being chosen as one of the 6 games to showcase
            which meant a decent amount of long hours to get it to a position
            where it could be shown.
          </p>
          <p>
            It was released into Early Access on the 26th of October 2018, the
            same day PAX Australia started. The game received a good reception
            at PAX with a constant stream of people bringing their friends back
            to get in on the action.
          </p>
          <p>
            TeleBlast is continually being worked on and the target for full
            release is July/August 2019.
          </p>
        </div>
        <div>
          <h1>Features</h1>
          <ul>
            <li>Easy to grasp hectic multiplayer action</li>
            <li>A wide range of arenas to play and more on the way</li>
            <li>
              Multiple game modes including TeleBlast and Capture the Flag
            </li>
            <li>Many variations which allow you to change the game</li>
          </ul>
        </div>
        <hr />
        <div>
          <h1>Videos</h1>
          <VideoWrapper>
            <div>
              <iframe
                title="Trailer"
                src="https://www.youtube.com/embed/hvwG9P39ASA"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p>
              TeleBlast Release Trailer -{" "}
              <a href="https://www.youtube.com/watch?v=hvwG9P39ASA">YouTube</a>
            </p>
          </VideoWrapper>
          <VideoWrapper>
            <div>
              <iframe
                title="Trailer"
                src="https://www.youtube.com/embed/UCR4hyeD2kg"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p>
              Capture The Flag Demo -{" "}
              <a href="https://www.youtube.com/watch?v=UCR4hyeD2kg">YouTube</a>
            </p>
          </VideoWrapper>
        </div>
        <hr />
        <div>
          <h1>Images</h1>
          <Alert>
            <a href="/screenshots.zip">
              download all screenshots and photos as .zip
            </a>
          </Alert>
          <ImageDisplay>
            <img src={Screenshot1} alt="screenshot" />
            <img src={Screenshot2} alt="screenshot" />
            <img src={Screenshot3} alt="screenshot" />
            <img src={Screenshot4} alt="screenshot" />
            <img src={Screenshot5} alt="screenshot" />
            <img src={Screenshot6} alt="screenshot" />
            <img src={Screenshot7} alt="screenshot" />
            <img src={Screenshot8} alt="screenshot" />
            <img src={Screenshot9} alt="screenshot" />
          </ImageDisplay>
          <p>
            There are far more images available for TeleBlast, but these are the
            ones we felt would be most useful to you. If you have specific
            requests, please do contact us!
          </p>
        </div>
        <hr />
        <div>
          <h1>Logo and Icon</h1>
          <Alert>
            <a href="/logo.zip">download all as .zip</a>
          </Alert>
          <ImageDisplay>
            <img src={Logo1} alt="TeleBlast Logo" />
            <img src={Logo2} alt="TeleBlast Logo - Shadowed" />
            <img src={Logo3} alt="TeleBlast Logo - Outlined" />
          </ImageDisplay>
        </div>
        <hr />
        <div>
          <h1>Awards and Recognition</h1>
          <ul>
            <li>"PAX Australia Indie Showcase" Melbourne, 26 October, 2018</li>
          </ul>
        </div>
        <hr />
        <div>
          <h1>Selected Articles</h1>
          <ul>
            <li>
              "Competitive multiplayer sports/combat games with a unique
              mechanic and that sound great to stream? Count me in. Not to
              mention the a e s t h e t i c aesthetic." - Matt McLeod, Select
              Start
            </li>
            <li>
              "Teleblast took me by surprise, offering up a tight, well-executed
              game about exploding and teleporting, and I’d dare call it my game
              of the show." - Nick Ballantyne, Game Cloud
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1>Request Press Copy</h1>
          <p>
            I would love for you to play TeleBlast and if its something that
            excites you then it would be a massive help if you could share it
            with your readers/viewers. Feel free to{" "}
            <a href="mailto: tim.veletta@gmail.com">email me</a> and tell me a
            bit about who you are, chances are I'll be more than happy to send
            you a key.
          </p>
        </div>
        <hr />
        <div>
          <h1>Monetisation Permission</h1>
          <p>
            Tim Veletta allows for the contents of TeleBlast to be published
            through video broadcasting services for any commercial or
            non-commercial purposes. Monetization of videos created containing
            assets from TeleBlast is legally & explicitly allowed by Tim
            Veletta.
          </p>
        </div>
        <hr />
        <Factsheet>
          <h1>Additional Links</h1>
          <ul>
            <li>
              <label>Twitter</label>
              <p>
                <a href="https://twitter.com/teleblastgame">
                  https://twitter.com/teleblastgame
                </a>
              </p>
            </li>
            <li>
              <label>Facebook</label>
              <p>
                <a href="https://facebook.com/teleblast">
                  https://facebook.com/teleblast
                </a>
              </p>
            </li>
            <li>
              <label>Instagram</label>
              <p>
                <a href="https://instagram.com/teleblast">
                  https://instagram.com/teleblast
                </a>
              </p>
            </li>
            <li>
              <label>Twitch</label>
              <p>
                <a href="https://twitch.tv/teleblast">
                  https://twitch.tv/teleblast
                </a>
              </p>
            </li>
            <li>
              <label>YouTube</label>
              <p>
                <a href="https://www.youtube.com/channel/UCSTGVDLEBqGndT0vvmUpZyA">
                  https://www.youtube.com/channel/UCSTGVDLEBqGndT0vvmUpZyA
                </a>
              </p>
            </li>
            <li>
              <label>Discord</label>
              <p>
                <a href="https://discord.gg/ZRwbxWw">
                  https://discord.gg/ZRwbxWw
                </a>
              </p>
            </li>
          </ul>
        </Factsheet>
        <hr />
        <div>
          <h1>About Tim Veletta</h1>
          <p>
            Tim has a day job as a web developer however on his commute he likes
            to work on all different types of side projects the latest of which
            is TeleBlast.
          </p>
        </div>
        <hr />
        <div>
          <h1>Credits</h1>
          <ul>
            <li>Tim Veletta - Design and Development</li>
            <li>Aaron Gicquel - Music and Sound Effects</li>
          </ul>
        </div>
        <hr />
        <div>
          <h1>Contact</h1>
          <p>
            If you want to get in touch about anything TeleBlast related, feel
            free to use any of the communication channels below.
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto: tim.veletta@gmail.com">tim.veletta@gmail.com</a>
            </li>
            <li>
              Twitter: <a href="https://twitter.com/timveletta">@TimVeletta</a>
            </li>
          </ul>
        </div>
      </Details>
    </Container>
  </Layout>
)

export default Presskit
