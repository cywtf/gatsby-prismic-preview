const linkResolver = ({ node, key, value }) => doc => {
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`
  }

  return `/${doc.uid}`
}

module.exports = linkResolver
