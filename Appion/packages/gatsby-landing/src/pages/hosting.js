import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from 'common/src/sections-gatsby/Navigation';
import Banner from 'common/src/sections-gatsby/Banner-hosting';
import About from 'common/src/sections-gatsby/About-hosting';
import Features from 'common/src/sections-gatsby/Features-hosting';
import CTAHosting from 'common/src/sections-gatsby/CTA-hosting';
import Faq from 'common/src/sections-gatsby/Faq-hosting';
import Counters from 'common/src/sections-gatsby/Counters';
import Pricing from 'common/src/sections-gatsby/Pricing';
import Testimonial from 'common/src/sections-gatsby/Testimonial';
import News from 'common/src/sections-gatsby/News';
import Contact from 'common/src/sections-gatsby/Contact';
import Footer from 'common/src/sections-gatsby/Footer';

import { GlobalStyle } from "common/src/sections-gatsby/app.style";
import theme from "common/src/theme/hosting/themeStyles";

const HostingPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Appion Gatsby Hosting" />
      <Navigation />
      <Banner />
      <About />
      <Pricing />
      <Features />
      <CTAHosting />
      <Counters />
      <Testimonial />
      <Faq />
      <News />
      <Contact />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default HostingPage;
