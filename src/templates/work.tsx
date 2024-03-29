import React from "react"
import { graphql } from "gatsby"
import { WorkPostByIdQuery } from "../../types/graphql-types"

import Seo from "../components/Seo"

type Props = {
  data: WorkPostByIdQuery
}

export const WorkTemplate: React.FC<Props> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <div className="blog-post mt-4">
      <Seo title={frontmatter.title} />
      <h1 className="font-sans my-4 font-bold text-2xl text-gray-900">{frontmatter.title}</h1>
      <h2 className="font-san smy-4 text-md text-gray-700">{frontmatter.description}</h2>
      <div className="font-serif blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
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
