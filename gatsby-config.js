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
    }
  ]
}
