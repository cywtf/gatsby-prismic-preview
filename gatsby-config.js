require("dotenv").config({
  path: `.env`,
})

const prismicLinkResolver = require("./src/utils/linkResolver")

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: `${process.env.PRISMIC_REPO}`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        schemas: {
          blog_post: require("./.prismic/blog_post.json"),
        },
        prismicToolbar: true,
        linkResolver: () => prismicLinkResolver,
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true
        },
      },
    },
  ],
}
