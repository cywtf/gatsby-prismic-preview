import React from "react"
import { graphql } from "gatsby"
import { withPreview } from "gatsby-source-prismic"

const BlogPost = ({ data: { singlePost } }) => {
  const { data } = singlePost
  return (
    <div>
      <div>
        <a href="/">go back</a>
        <h3>{data.title.text}</h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.text.html }} />
    </div>
  )
}

export default withPreview(BlogPost)

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    singlePost: prismicBlogPost(uid: { eq: $uid }) {
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
