import React from "react"
import styled from '@emotion/styled'
//import Header from '../components/header'
import WorkRoll from '../components/WorkRoll'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Text = styled.p`
  color: blue;
  margin: 1rem 0;
`

export default (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <div className="container mx-auto py-8 w-10/12 h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-xl">{data.title}</h1>
      <Text>{data.intro}</Text>
      <Img className="w-full" fluid={data.image.childImageSharp.fluid} />
      <WorkRoll></WorkRoll>
    </div>
)}

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"}, name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
