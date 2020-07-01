import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from 'common/src/sections/Navigation';
import Banner from 'common/src/sections/Banner-hosting';
import About from 'common/src/sections/About-hosting';
import Features from 'common/src/sections/Features-hosting';
import CTAHosting from 'common/src/sections/CTA-hosting';
import Faq from 'common/src/sections/Faq-hosting';
import Counters from 'common/src/sections/Counters';
import Pricing from 'common/src/sections/Pricing';
import Testimonial from 'common/src/sections/Testimonial';
import News from 'common/src/sections/News';
import Contact from 'common/src/sections/Contact';
import Footer from 'common/src/sections/Footer';

import { GlobalStyle } from "common/src/sections/app.style";
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
