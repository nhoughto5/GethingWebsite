/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gethin is the Ogie boogie man`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-mdx", 
  "gatsby-plugin-sharp", 
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-react-bootstrap`,
      short_name: `react-bootstrap`,
      start_url: `/`,
      background_color: `#20232a`,
      theme_color: `#20232a`,
      display: `minimal-ui`,
      icon: "src/images/nic.ico",
    },
  },
  "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};