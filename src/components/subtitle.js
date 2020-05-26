import React from "react"
import styled from "styled-components"

export default function Subtitle({ children }) {
  return (
    <>
      <SectionTitle>{children}</SectionTitle>
      <HR />
    </>
  )
}

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

const HR = styled.hr`
  width: 8%;
  background: black;
  height: 1px;
  margin-bottom: 6rem;
`
