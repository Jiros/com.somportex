import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"

const Header = () => (
  <header className="header">
    <div className="headerLogo">
      <Link to="/">
        {/* Adjust the image filename, width, and quality as needed */}
        <StaticImage src="../images/somportex-logo-alpha-wide.png" alt="Logo" width={250} quality={95} />
        {/* <StaticImage src="../images/icon.png" alt="Logo" width={80} quality={95} /> */}
      </Link>
    </div>
    <nav>
      <ul className="headerNav">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header