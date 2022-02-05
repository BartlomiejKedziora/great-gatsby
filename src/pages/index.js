import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSliderSection from "../components/HeroSlider/HeroSliderSection"
import OfficeSection from "../components/Office/OfficeSection"
import IconsSection from "../components/Icons/IconsSection"
import Banner from "../components/Banner/Banner"
import NewsSection from "../components/News/NewsSection"
import Gallery from "../components/Gallery/Gallery"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSliderSection></HeroSliderSection>
    <OfficeSection></OfficeSection>
    <IconsSection></IconsSection>
    <Banner></Banner>
    <NewsSection></NewsSection>
    <Gallery></Gallery>
  </Layout>
)

export default IndexPage
