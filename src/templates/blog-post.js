import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../styles/wrapper"
import blogimg from "../images/blogging.jpg"
import { TagButton } from "../styles/tagbutton"

export default ({ data, pageContext }) => {
  const post = data.contentfulBlogPost
  const { title, date, author, tags } = post
  console.log(post)
  return (
    <Layout>
      <SEO
        title={title}
        // description={description}
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
              {tags.map((tag, index) => (
                <TagButton key={index}>{tag.content}</TagButton>
              ))}
            </div>
          </BlogMeta>
        </BlogHeader>
        <CenterDivider />
        {documentToReactComponents(data.contentfulBlogPost.body.json)}
      </MainBlog>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      date(formatString: "MMMM Do YYYY")
      title
      tags {
        content
      }
      author
      body {
        json
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
