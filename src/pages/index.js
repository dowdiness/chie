import React from "react"
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import WorkRoll from '../components/WorkRoll'
import Seo from "../components/Seo"
import Contact from "../components/Contact"



const Text = styled.p`
  color: blue;
  margin: 1rem 0;
`

export default (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <div className="flex items-center justify-center flex-col">
      <Seo title="Home" />
      <h1 className="font-bold text-3xl">{data.title}</h1>
      <Text>{data.intro}</Text>
      <Img className="w-full mb-8" fluid={data.image.childImageSharp.fluid} />
      <h2 id="works">Works</h2>
      <WorkRoll ></WorkRoll>
      <h2 id="profile">Profile</h2>
      <h2 id="contact" className="my-8">Contact</h2>
      <Contact />
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
                    ...GatsbyImageSharpFluid_withWebp
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
