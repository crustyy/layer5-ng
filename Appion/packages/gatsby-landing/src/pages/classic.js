import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "common/src/sections/Navigation"
import BannerClassic from "common/src/sections/Banner-classic"
import AboutClassic from "common/src/sections/About-classic"
import FeaturesClassic from "common/src/sections/Features-classic"
import FaqClassic from "common/src/sections/Faq-Classic"
import Integrations from "common/src/sections/Integrations"
import AppScreens from "common/src/sections/AppScreens-classic"
import Counter from "common/src/sections/Counters"
import Pricing from "common/src/sections/Pricing"
import Testimonial from "common/src/sections/Testimonial"
import News from "common/src/sections/News"
import Getapp from "common/src/sections/Getapp"
import Client from "common/src/sections/Client"
import Footer from "common/src/sections/Footer-classic"

import { GlobalStyle } from "common/src/sections/app.style"
import theme from "common/src/theme/classic/themeStyles"

const ClassicPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Appion Gatsby Home" />
      <Navigation />
      <BannerClassic />
      <AboutClassic />
      <Integrations />
      <FeaturesClassic />
      <AppScreens />
      <Counter />
      <Pricing />
      <Testimonial />
      <FaqClassic />
      <Getapp />
      <News />
      <Client />
      <Footer />
    </Layout>
  </ThemeProvider>
)
export default ClassicPage
