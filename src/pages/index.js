import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSlider from "../components/HeroSlider"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSlider></HeroSlider>

    <div style={{
          marginTop: `300px`,
        }}></div>
    <p>
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
