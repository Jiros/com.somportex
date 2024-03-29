import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import HeroSection from "../components/HeroSection"
import Cards from '../components/Cards'; // Adjust the path as needed
import ContactForm from "../components/ContactForm"


const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
    <HeroSection />
    <StaticImage
        src="../images/somportex-logo-text.png"
        loading="eager"
        width={250}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ margin: `var(--space-6)`}}
      />
    <Cards />  
    <ContactForm />
    </div>


  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
