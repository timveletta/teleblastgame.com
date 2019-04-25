import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Trailer from "../components/trailer"
import SEO from "../components/seo"
import Feedback from "../components/feedback"
import About from "../components/about"
import Screenshots from "../components/screenshots"
import FAQ from "../components/faq"
import SteamWidget from "../components/steam-widget"

const IndexPage = () => (
  <Layout>
    <SEO title="" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <Trailer />
    <Feedback />
    <About />
    <SteamWidget />
    <Screenshots />
    <FAQ />
  </Layout>
)

export default IndexPage
