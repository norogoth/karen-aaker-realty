import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Layout from "./layout.css"

const Buyer = ({children}) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<div className="buyerMainDiv">
			<nav className = "navbar navbar-expand-md navbar-light">
			</nav>
			<div className="mainContent">
				<main>{children}</main>
			</div>
		</div>	
	);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
