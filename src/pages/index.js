import React from "react"
import { withPreview } from "gatsby-source-prismic"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div>
      to see the blog go <Link to="/blog/first-post">here</Link>
    </div>
  )
}

export default withPreview(Home)
