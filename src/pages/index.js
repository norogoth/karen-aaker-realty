import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function consoleLogger() {
	console.log("BUTTON CLICKED");
}

const IndexPage = () => (
  <Layout>
	<head>
		<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
	</head>
    <Seo title="Home" />
	<div className="header-background-img-section"></div>	
	<StaticImage className="logo" src="../images/explogo.png" alt="EXP Realty"/>:console.warn();
	<div className="content">
		<h1 className="title">Karen Aaker Realty</h1>
		<p className="subtitle">CRMLS - eXp Realty of California, Inc. CA DRE#01878277</p>
		<div className="buttonDiv">
			<div className="buttonDiv2">
				<button onClick={() => {navigate("/sell")}} type="button" className="btn btn-dark btn-lg">I want to sell.</button>
				<button onClick={() => {navigate("/buy")}} type="button" className="btn btn-dark btn-lg">I want to buy.</button>
			</div>
		</div>
	</div>
  </Layout>
)

export default IndexPage
