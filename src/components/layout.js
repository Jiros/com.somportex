/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div
        style={{
          margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            textAlign: 'center',
            color: 'white'
          }}
        >
          © {new Date().getFullYear()} &middot; Somportex Travel
          {` ` }&middot; {` ` }
          <a style={{
            color: 'white'
          }}href="/privacy">Privacy Policy</a>
          {` ` }&middot; {` ` }
          <a style={{
            color: 'white'
          }}href="mailto:info@somportextravel.com">info@somportextravel.com</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
