import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      Hello world!
      <div>
        <Link to="/blog/">blog page</Link>
      </div>
      {/* external link */}
      <a href="https://www.gatsbyjs.org/">Gatsby docs</a>
    </div>
  )
}
