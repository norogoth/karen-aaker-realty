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
	<div className="landingDiv">
		<label className="title">Good Guys Realty</label>
		<button>I want to sell.</button>
		<button>I want to buy.</button>
	</div>
  </Layout>
)

export default IndexPage
