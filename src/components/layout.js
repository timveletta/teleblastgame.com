/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              margin: "2rem auto",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Built with <span style={{ color: "red" }}>❤</span> by
            {` `}
            <a href="https://www.timveletta.com" style={{ color: "#ffffff" }}>
              Tim Veletta
            </a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
