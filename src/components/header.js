import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = () => (
  <HeaderSticky>
    <Navbar>
      <h1>
        <Link to="/">R.</Link>
      </h1>
      <NavMenu>
        <NavItem>
          <h4>ABOUT</h4>
        </NavItem>
        <NavItem>
          <h4>BLOG</h4>
        </NavItem>
      </NavMenu>
    </Navbar>
  </HeaderSticky>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// Styled Components

const HeaderSticky = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 20px 0px;
`

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
`

const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
`

const NavItem = styled.li`
  margin: 0 0 0 3rem;
  font-size: 1.25rem;
  font-weight: 700;
`
