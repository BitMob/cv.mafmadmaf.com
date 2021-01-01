const contentDir = `${__dirname}/src/content`

module.exports = {
  siteMetadata: {
    title: `maf's gallery`,
    description: `maf's gallery`,
    author: `maf`,
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
        name: `maf works`,
        short_name: `maf works`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#363636`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: new RegExp(/^https:\/\/fonts\.googleapis\.com/),
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern: new RegExp(/^https:\/\/fonts\.gstatic\.com/),
              handler: "StaleWhileRevalidate",
            },
          ],
        },
      },
    },
  ],
}
