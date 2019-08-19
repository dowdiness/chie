import React from "react"
import styled from '@emotion/styled'
//import Header from '../components/header'
import { graphql } from 'gatsby';

const Text = styled.p`
  color: blue;
  margin: 1rem 0;
`

export default (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
  <div className="container mx-auto w-screen h-screen flex items-center justify-center flex-col">
    <h1 className="font-bold text-xl">{data.title}</h1>
    <Text>{data.intro}</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={data.image} alt='home' />
    </div>
  </div>
)}

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
          }
        }
      }
    }
  }
}`
