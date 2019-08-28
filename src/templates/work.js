import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <div className="blog-post mt-4">
      <Seo title={frontmatter.title}/>
      <h1 className="my-4 font-bold text-2xl text-gray-900">{frontmatter.title}</h1>
      <h2 className="my-4 text-md text-gray-700">{frontmatter.description}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query WorkPostByID($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        featuredimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
