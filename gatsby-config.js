module.exports = {
  siteMetadata: {
    title: `Doma Bauunternehmen`,
    description: `Doma Bauunternehmen aus Frankfurt am Main. Sanierung, Modernisierung, Umbau, Renovierung, Innenausbau und vieles mehr!`,
    author: `@hochwerben`,
    siteUrl: `https://doma-bauunternehmen.de`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://doma-bauunternehmen.de',
        sitemap: 'https://doma-bauunternehmen.de/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Doma Bauunternehmen`,
        short_name: `Doma Bau`,
        start_url: `/`,
        background_color: `#2B2E31`,
        theme_color: `#996D23`,
        display: `minimal-ui`,
        icon: `src/images/domabau-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
