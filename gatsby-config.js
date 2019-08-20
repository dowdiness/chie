/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-postcss', 
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      }
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
                  maxWidth: 590,
              },
          },
        ],
      }
    }
  ]
}
