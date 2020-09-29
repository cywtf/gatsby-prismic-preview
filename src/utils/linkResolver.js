const linkResolver = ({ field, value, node }) => doc => {
  console.log("doc.type ", doc.type)
  if (doc.type === "blog_post") return `/blog/${doc.uid}`

  return `/${doc.uid}`
}

module.exports = linkResolver
