/**
 * @type {import('gatsby').GatsbyConfig}
 */

const contentDir = `${__dirname}/src/content`;

module.exports = {
  siteMetadata: {
    title: `maf's gallery`,
    description: `About maf`,
    author: `maf`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
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
  ],
};
