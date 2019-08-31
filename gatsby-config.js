/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Ono chie`,
    description: `Ono chie's port folio site.`,
    author: `koji ishimoto`,
    siteUrl: `https://chie.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-postcss', 
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-layout`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://chie.netlify.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        id: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
              resolve: `gatsby-remark-images`,
              options: {
                  maxWidth: 1024,
                  withWebp: true
              },
          },
        ],
      }
    }
  ]
}
