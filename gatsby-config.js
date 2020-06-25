const contentDir = `${__dirname}/src/content`

module.exports = {
  siteMetadata: {
    title: `mafmadmaf`,
    description: `About maf, a designer`,
    author: `mafmadmaf`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${contentDir}/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `intros`,
        path: `${contentDir}/intros`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mafmadmaf`,
        short_name: `mafmadmaf`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#363636`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
