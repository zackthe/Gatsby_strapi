import * as React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation"

const Header = ({ siteTitle }) => (
  <header
    className="container mx-auto"
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
    }}
  >
    <Navigation />
  </header>
)

export default Header
