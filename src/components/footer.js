import React from "react"
import styled from "styled-components"

export default function Footer() {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Built with{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: white;
`
