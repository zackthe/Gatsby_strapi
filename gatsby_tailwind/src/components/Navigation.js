// src/components/NavigationBar.js
import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav className="flex justify-between ">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Features</Link>
          </li>
          <li>
            <Link to="/knowledge">Knowledge base</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
