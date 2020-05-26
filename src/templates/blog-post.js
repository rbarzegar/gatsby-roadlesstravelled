import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../styles/wrapper"
import blogimg from "../images/blogging.jpg"
import { TagButton } from "../styles/tagbutton"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { title, description, date, author, tags } = post.frontmatter
  console.log(...tags)
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        pathname={pageContext.slug}
      />
      <BlogJumbo />
      <MainBlog>
        <BlogHeader>
          <h1>{title}</h1>
          <BlogMeta>
            <div className="date-and-author">
              {date} | {author}
            </div>
            <div>
              {tags.map(tag => (
                <TagButton>{tag}</TagButton>
              ))}
            </div>
          </BlogMeta>
        </BlogHeader>
        <CenterDivider />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </MainBlog>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D YYYY")
        description
        author
        tags
      }
    }
  }
`

// Styled Components

const BlogJumbo = styled(Wrapper)`
  height: 70vh;
  background: url(${blogimg});
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
`

const MainBlog = styled.main`
  background: white;
  width: 75%;
  margin: -15rem auto;
  padding: 2rem;
`

const BlogHeader = styled.header`
  text-align: center;
  & h1 {
    font-size: 3.25rem;
  }
  & .date-and-author {
    margin-bottom: 0.5rem;
  }
`

const BlogMeta = styled.div`
  margin-bottom: 3rem;
`

const CenterDivider = styled.div`
  width: 3rem;
  border-top: 1px solid black;
  margin: 0 auto 3rem;
`
