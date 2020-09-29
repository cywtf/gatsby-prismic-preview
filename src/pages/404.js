import * as React from "react"
import { withUnpublishedPreview } from "gatsby-source-prismic"
import BlogPostTemplate from "../templates/post"

const NotFoundPage = () => (
  <div>
    <h1>Page not found!</h1>
  </div>
)

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    blog_post: BlogPostTemplate,
  },
})
