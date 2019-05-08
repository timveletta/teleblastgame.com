import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  background-color: rgba(237, 0, 140, 0.5);
  border: 1px solid #ed008c;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 1rem 0;
`

const Alert = ({ ...props }) => <Container>{props.children}</Container>

export default Alert
