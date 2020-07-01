import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "common/src/sections/Navigation"
import BlogSingle from "common/src/sections/Blog-single"
import Footer from "common/src/sections/Footer"

import { GlobalStyle } from "common/src/sections/app.style"
import theme from "common/src/theme/blog/themeStyles"

const BlogSinglePage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Appion Gatsby Home" />
      <Navigation />
      <BlogSingle />
      <Footer />
    </Layout>
  </ThemeProvider>
)
export default BlogSinglePage
