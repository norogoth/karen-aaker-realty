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
	<img className="logo" src="explogo.png" alt="EXP Realty"/>
	<div className="content">
		<h1 className="title">Karen Aaker Realty</h1>
		<p className="subtitle">CRMLS - eXp Realty of California, Inc. CA DRE#01878277</p>
		<div className="buttonDiv">
			<div className="buttonDiv2">
				<button type="button" class="btn btn-dark btn-lg">I want to sell.</button>
				<button type="button" class="btn btn-dark btn-lg">I want to buy.</button>
			</div>
		</div>
	</div>
  </Layout>
)

export default IndexPage
