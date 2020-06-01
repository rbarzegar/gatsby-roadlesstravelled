import React from "react"
import Card from "./postCard"
import Subtitle from "./subtitle"
import styled from "styled-components"
import Wrapper from "../styles/wrapper"

export default function Posts({ posts }) {
  return (
    <Wrapper>
      <Subtitle>Recent Blog Posts</Subtitle>
      <CardGrid>
        {posts.map(({ node }) => (
          <Card
            key={node.id}
            to={node.slug}
            title={node.title}
            date={node.date}
            excerpt={node.excerpt.childMarkdownRemark.excerpt}
          />
        ))}
      </CardGrid>
    </Wrapper>
  )
}

// Styled components

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: 4rem;
  grid-row-gap: 6rem;
`
