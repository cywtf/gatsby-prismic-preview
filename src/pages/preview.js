import * as React from "react"
import { withPreviewResolver } from "gatsby-source-prismic"
import linkResolver from "../utils/linkResolver.js"

const PreviewPage = ({ isPreview, isLoading, previewData }) => {
  if (isPreview === false) return "Not a preview!"

  return (
    <div>
      <p>loading preview</p>
    </div>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: "prismic-preview-asdasd",
  linkResolver,
})
