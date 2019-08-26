import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class WorkRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: works } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {works &&
          works.map(({ node: work }) => (
            <div className="is-parent column is-6" key={work.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  work.frontmatter.featuredwork ? 'is-featured' : ''
                }`}
              >
                <header>
                  {work.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: work.frontmatter.featuredimage,
                          alt: `featured image thumbnail for work ${
                            work.title
                          }`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="work-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={`/works/${work.frontmatter.title}`}
                    >
                      {work.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {work.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {work.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={`/works/${work.frontmatter.title}`}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query WorksQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "work-post"}}}) {
          edges {
            node {
              id
              excerpt(pruneLength: 400)
              html
              frontmatter {
                title
                tags
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
        }
      }
    `}
    render={(data, count) => <WorkRoll data={data} count={count} />}
  />
)
