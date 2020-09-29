import React from "react"
import { graphql } from "gatsby"
import { withPreview } from "gatsby-source-prismic"

const BlogPost = ({ data }) => {
  if (!data) return null
  const post = data.prismicBlogPost.data
  return (
    <div>
      <div>
        <a href="/">go back</a>
        <h3>{post.title.text}</h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.text.html }} />
    </div>
  )
}

export default withPreview(BlogPost)

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        text {
          text
          html
        }
      }
    }
  }
`
