import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSliderSection from "../components/HeroSliderSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSliderSection></HeroSliderSection>
    <div className="container">
      sadfsadffffffffffffffffffffffffffffffffffffffffffffff
      fdfffffffffffffffffffffff
      dffffffffffffffffffffffffffff
    </div>
    <div style={{
          marginTop: `300px`,
        }}></div>
    <p>
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
