import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/global/BackgroundSection"
import Info from "../components/global/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    />
    <Info title="Who we are" btnText="Home Page" link="/" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
