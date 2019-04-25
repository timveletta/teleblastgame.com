import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Container = styled.header`
  height: 100vh;
  min-height: 600px;

  background-image: url("./static/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: grid;
  grid-template-rows: 1rem auto;

  margin-bottom: -4rem;
`

const Links = styled.div`
  color: #ffffff;
`

const Header = () => (
  <Container>
    <Links>Discord Twitter Instagram Facebook Presskit</Links>
    <div>
      <Image />
    </div>
  </Container>
)

export default Header
