module.exports = {
  siteMetadata: {
    title: `The Road Less Travelled`,
    description: `A blog about life coaching, motorcycling and personal development`,
    author: `@thenomadbiker`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown posts`,
        path: `${__dirname}/src/markdown-posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
