"use strict"

require(`ts-node`).register({
  compilerOptions: {
    module: `commonjs`,
    target: `esnext`,
  },
})

const { fmImagesToRelative } = require(`gatsby-remark-relative-images`)
const path = require(`path`)

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

// exports.createPages = require(`./gatsby-node/index`).createPages

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query WorkQuery {
      allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "work-post" } } }) {
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

  const works = result.data.allMarkdownRemark.edges
  works.forEach(({ node }) => {
    const id = node.id
    createPage({
      path: `/works/${node.frontmatter.path}`,
      component: path.resolve(`src/templates/work.tsx`),
      context: {
        id,
      },
    })
  })
}
