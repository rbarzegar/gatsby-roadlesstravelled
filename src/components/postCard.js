import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Card(props) {
  return (
    <StyledCard>
      <CardHeader>
        <H2>{props.title}</H2>
        <h4>
          <em>{props.date}</em>
        </h4>
      </CardHeader>
      <p>{props.excerpt}</p>
      <StyledLink to={props.to}>
        <CardButton>Read more</CardButton>
      </StyledLink>
    </StyledCard>
  )
}

const StyledLink = styled(Link)`
  color: inherit;
`

const CardHeader = styled.div`
  margin-bottom: 2rem;
`

const H2 = styled.h2`
  margin-bottom: 0.5rem;
`

const StyledCard = styled.div`
  box-shadow: none;
`

const CardButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px;
  margin: 0;
  cursor: pointer;
  font-weight: 700;
`
