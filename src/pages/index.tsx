import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import WorkRoll from "../components/WorkRoll"
import Seo from "../components/Seo"
import Contact from "../components/Contact"

const Text = styled.p`
  color: white;
  margin: 1rem 0;
`

const MainText = styled.h1`
  position: absolute;
  top: 25%;
  left: 30%;
  transform: translateY(-50%) translateX(-50%);
  margin: auto;
`

const Pretapor = styled.div`
  width: 100%;
  height: 50vh;
`

const BrownImg = styled(Img)`
  position: absolute !important;
  width: 16rem;
  min-width: 120px;
  height: 24rem;
  left: 10%;
  bottom: 10%;
`

const IndexPage = props => {
  const fluid = props.data.allImageSharp.edges[0].node.fluid
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <div className="flex items-center justify-center flex-col">
      <Seo title="Home" />
      <BackgroundImage
        Tag="section"
        className="w-screen h-screen"
        fluid={data.image.childImageSharp.fluid}
        backgroundColor={`#b39b87`}
      >
        <MainText className="font-sans font-bold text-4xl text-white">{data.title}</MainText>
      </BackgroundImage>
      <div className="w-screen h-screen relative">
        <Pretapor className="bg-white absolute top-0"></Pretapor>
        <Pretapor className="bg-primary absolute bottom-0 flex justify-center">
          <div className="mb-6 ml-16">
            <Text className="block font-serif">
              プレタポルチェ。キャッチコピーなどざっくりとした説明。
            </Text>
          </div>
        </Pretapor>
        <BrownImg className="absolute" fluid={fluid} />
      </div>
      <div>
        <h2 id="works">Works</h2>
      </div>
      <WorkRoll></WorkRoll>
      <h2 id="profile">Profile</h2>
      <h2 id="contact" className="my-8">
        Contact
      </h2>
      <Contact />
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allFile(filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }) {
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
    allImageSharp(filter: { fluid: { originalName: { eq: "IMG_9998.JPG" } } }) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
