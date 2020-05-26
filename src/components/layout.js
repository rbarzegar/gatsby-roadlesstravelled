import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import GlobalStyle from "../styles/global"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
