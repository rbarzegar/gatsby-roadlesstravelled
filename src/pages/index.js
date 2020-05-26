import React from "react"
import Jumbotron from "../components/jumbotron"
import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Jumbotron />
      <Posts posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM D YYYY")
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
