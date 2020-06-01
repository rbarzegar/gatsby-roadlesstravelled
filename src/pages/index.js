import React from "react"
import Jumbotron from "../components/jumbotron"
import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"

export default ({ data }) => {
  const posts = data.allContentfulBlogPost.edges

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
    allContentfulBlogPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do YYYY")
          excerpt {
            childMarkdownRemark {
              excerpt
            }
          }
          id
        }
      }
    }
  }
`
