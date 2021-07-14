import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
	<head>
		<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
	</head>
    <Seo title="Home" />
	<div className="header-background-img-section"></div>	
	<div className="content">
		<h1 className="title">Karen Aaker Realty</h1>
		<div className="buttonDiv">
			<div className="buttonDiv2">
				<button type="button" class="btn btn-primary">I want to sell.</button>
				<button type="button" class="btn btn-primary">I want to buy.</button>
			</div>
		</div>
	</div>
  </Layout>
)

export default IndexPage
