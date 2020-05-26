import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Jumbo } from "../styles/jumbo"

export default function Jumbotron() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Jumbo>
      <div>
        <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
        <SiteSubtitle>{data.site.siteMetadata.description}</SiteSubtitle>
      </div>
    </Jumbo>
  )
}

// STYLED COMPONENTS

const SiteTitle = styled.h1`
  margin: 0 0 1rem 0;
  color: white;
  font-size: 4rem;
`

const SiteSubtitle = styled.p`
  color: white;
  font-size: 1rem;
`
