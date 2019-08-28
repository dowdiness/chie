// In your gatsby-node.js file

const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const path = require(`path`)

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
  query WorkQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "work-post"}}}) {
      edges {
        node {
          id
          frontmatter {
            path
          }
        }
      }
    }
  }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  const works = result.data.allMarkdownRemark.edges
  works.forEach(({ node }) => {
    const id = node.id
    createPage({
      path: `/works/${node.frontmatter.path}`,
      component: path.resolve(`src/templates/work.js`),
      context: {
        id,
      },
    })
  })
}
