import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;
  justify-items: center;

  > div {
    width: 100%;
    height: auto;
    border-radius: 4px;
    border: 4px solid #ffffff;
    margin-bottom: 0;
  }
`

const Screenshots = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        screenshots: allFile(
          sort: { order: ASC, fields: [absolutePath] }
          filter: { name: { regex: "/screenshot-*/" } }
        ) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={({ screenshots }) => (
      <Container>
        {screenshots &&
          screenshots.edges.map(i => (
            <Img key={i.node.name} fluid={i.node.childImageSharp.fluid} />
          ))}
      </Container>
    )}
  />
)

export default Screenshots
