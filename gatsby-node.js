/*
  Create individual blog posts
  */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve("./src/templates/post.js")

  const result = await graphql(`
    {
      posts: allPrismicBlogPost(
        sort: { fields: last_publication_date, order: DESC }
      ) {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const postsList = result.data.posts.edges

  // TODO: Cy: If you dont choose a category in blog post it breaks

  postsList.forEach(edge => {
    const url = `/blog/${edge.node.uid}`
    createPage({
      path: url,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
