import * as React from "react"
import { withPreviewResolver } from "gatsby-source-prismic"

const PreviewPage = ({ isPreview, isLoading }) => {
  console.log("PreviewPage")
  if (isPreview === false) return "Not a preview!"

  return (
    <div>
      <p>Loading</p>
    </div>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: "prismic-preview-asdasd",
  linkResolver: ({ node, key, link }) => doc => {
    if (doc.type === "home") return `/`
    return `/${doc.uid}`
  },
})
